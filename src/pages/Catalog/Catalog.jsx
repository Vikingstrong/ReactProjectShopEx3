import { useState } from "react";
import { productsData } from "../../data/data";
import ProductCard from "../../components/ui/Card/ProductCard";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Catalog() {
    const gridProducts = productsData.slice(0, 9);
    const similarProducts = productsData.slice(9, 15);

    return (
        <main className="w-full max-w-300 m-auto px-5 lg:px-0 pt-32 lg:pt-60 pb-20">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-6 lg:mb-4">
                <span>Детская мебель</span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-[#446B80]">Кроватки</span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-semibold text-[#446B80] mb-8 lg:mb-12">Кроватки</h1>

            <div className="flex flex-col lg:flex-row gap-10">

                <aside className="w-full lg:w-64 shrink-0 flex flex-col gap-8 lg:gap-6">

                    <div>
                        <h3 className="text-[#446B80] font-medium mb-4 lg:mb-3">Цена, ₽</h3>
                        <div className="flex items-center gap-2">
                            <input type="text" placeholder="от 9 500" className="border border-gray-200 rounded-full px-4 py-2.5 lg:py-2 w-full text-sm outline-none focus:border-[#7FC9F0]" />
                            <input type="text" placeholder="до 70 000" className="border border-gray-200 rounded-full px-4 py-2.5 lg:py-2 w-full text-sm outline-none focus:border-[#7FC9F0]" />
                        </div>
                        <label className="flex items-center gap-3 lg:gap-2 mt-4 lg:mt-3 text-sm text-[#446B80] cursor-pointer">
                            <input type="checkbox" className="w-5 h-5 lg:w-4 lg:h-4 rounded border-gray-300 text-[#7FC9F0] accent-[#7FC9F0]" />
                            По акции
                        </label>
                    </div>


                    <div>
                        <h3 className="text-[#446B80] font-medium mb-4 lg:mb-3">Бренд</h3>
                        <input type="text" placeholder="Поиск бренда..." className="border border-gray-200 rounded-full px-4 py-2.5 lg:py-2 w-full text-sm outline-none mb-4 lg:mb-3 bg-gray-50 focus:border-[#7FC9F0]" />
                        <div className="flex flex-col gap-3 lg:gap-2 max-h-48 lg:max-h-40 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full pr-2">
                            {["Albero, Россия", "Antel", "Babybaby", "Bambola", "Bussato", "Cybex", "Happy Baby"].map((brand, i) => (
                                <label key={i} className="flex items-center gap-3 lg:gap-2 text-sm text-[#446B80] cursor-pointer">
                                    <input type="checkbox" className="w-5 h-5 lg:w-4 lg:h-4 rounded border-gray-300 text-[#7FC9F0] accent-[#7FC9F0]" />
                                    {brand}
                                </label>
                            ))}
                        </div>
                    </div>


                    <div>
                        <h3 className="text-[#446B80] font-medium mb-4 lg:mb-3">Цвет</h3>
                        <div className="flex flex-col gap-3 lg:gap-2 max-h-48 lg:max-h-40 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full pr-2">
                            {["Слоновая кость", "Белый", "Венге", "Шоколад", "Орех", "Бук", "Натуральный"].map((color, i) => (
                                <label key={i} className="flex items-center gap-3 lg:gap-2 text-sm text-[#446B80] cursor-pointer">
                                    <input type="checkbox" className="w-5 h-5 lg:w-4 lg:h-4 rounded border-gray-300 text-[#7FC9F0] accent-[#7FC9F0]" />
                                    {color}
                                </label>
                            ))}
                        </div>
                    </div>
                    

                    <div>
                        <h3 className="text-[#446B80] font-medium mb-4 lg:mb-3">Материал</h3>
                        <div className="flex flex-col gap-3 lg:gap-2">
                            {["Бук", "Береза", "ЛДСП", "Сосна", "Массив"].map((item, i) => (
                                <label key={i} className="flex items-center gap-3 lg:gap-2 text-sm text-[#446B80] cursor-pointer">
                                    <input type="checkbox" className="w-5 h-5 lg:w-4 lg:h-4 rounded border-gray-300 text-[#7FC9F0] accent-[#7FC9F0]" />
                                    {item}
                                </label>
                            ))}
                        </div>
                    </div>
                    

                    <div>
                        <h3 className="text-[#446B80] font-medium mb-4 lg:mb-3">Маятник</h3>
                        <div className="flex flex-col gap-3 lg:gap-2">
                            {["Универсальный", "Поперечный", "Продольный"].map((item, i) => (
                                <label key={i} className="flex items-center gap-3 lg:gap-2 text-sm text-[#446B80] cursor-pointer">
                                    <input type="checkbox" className="w-5 h-5 lg:w-4 lg:h-4 rounded border-gray-300 text-[#7FC9F0] accent-[#7FC9F0]" />
                                    {item}
                                </label>
                            ))}
                        </div>
                    </div>
                    

                    <div>
                        <h3 className="text-[#446B80] font-medium mb-4 lg:mb-3">Ящик</h3>
                        <div className="flex flex-col gap-3 lg:gap-2">
                            {["Есть", "Нет"].map((item, i) => (
                                <label key={i} className="flex items-center gap-3 lg:gap-2 text-sm text-[#446B80] cursor-pointer">
                                    <input type="checkbox" className="w-5 h-5 lg:w-4 lg:h-4 rounded border-gray-300 text-[#7FC9F0] accent-[#7FC9F0]" />
                                    {item}
                                </label>
                            ))}
                        </div>
                    </div>
                </aside>


                <div className="flex-1 flex flex-col">

                    <div className="flex justify-start mb-6">
                        <div className="flex items-center gap-2 text-sm text-[#446B80] cursor-pointer">
                            Сортировать по популярности
                            <ChevronDown className="w-4 h-4 text-[#7FC9F0]" />
                        </div>
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {gridProducts.map(p => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>

     
                    <div className="flex flex-col items-center mt-12 gap-6 lg:gap-4 border-t border-gray-200 pt-8 lg:pt-12 relative">
                        <button className="w-full lg:w-auto px-10 py-3 lg:py-2.5 border border-gray-200 text-[#446B80] rounded-full hover:bg-gray-50 transition-colors lg:-mt-16 bg-white z-10 lg:absolute lg:top-0">
                            Показать еще
                        </button>
                        <div className="flex items-center gap-2 text-[#446B80] lg:mt-8">
                            <button className="w-10 h-10 lg:w-8 lg:h-8 flex items-center justify-center border border-[#7FC9F0] rounded text-[#7FC9F0]">1</button>
                            <button className="w-10 h-10 lg:w-8 lg:h-8 flex items-center justify-center hover:text-[#7FC9F0]">2</button>
                            <button className="w-10 h-10 lg:w-8 lg:h-8 flex items-center justify-center hover:text-[#7FC9F0]">3</button>
                            <button className="flex items-center gap-1 hover:text-[#7FC9F0] ml-2">Дальше <ChevronRight className="w-4 h-4" /></button>
                        </div>
                    </div>
                </div>
            </div>

        
            <div className="mt-24 lg:mt-32 flex flex-col items-center w-full overflow-hidden">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#446B80] mb-8 lg:mb-12">Похожие товары</h2>
                <Swiper 
                    className="w-full lg:max-w-5xl"
                    slidesPerView={2}
                    spaceBetween={16}
                    breakpoints={{
                        640: {slidesPerView: 2},
                        1024: {slidesPerView: 3}
                    }}
                >
                    {similarProducts.map(p => (
                        <SwiperSlide key={p.id}>
                            <ProductCard product={p} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </main>
    );
}
