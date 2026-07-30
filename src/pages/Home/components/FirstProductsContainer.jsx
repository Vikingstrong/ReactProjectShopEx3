
import { productsData } from "../../../data/data"
import PrimaryButton from "../../../components/ui/Buttons/PrimaryButton"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { useContext } from "react";
import { cartContext } from "../../../context/context";


export default function FirstProductsContainer(){
    const {cart, addToCart} = useContext(cartContext);

    const firstProducts = productsData.slice(0, 2)

    return (
        <section className="p-5 lg:px-0 max-w-300 m-auto flex py-10 lg:py-20 gap-10">
            <Swiper
                breakpoints={{
                1024: {
                    enabled: false,
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                }}>
                {firstProducts.map((product) => (
                  <SwiperSlide key={product.id}>
                    <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-5 lg:gap-10 p-5 shadow-xl rounded-lg bg-white h-full">
                      <img className="w-50 h-50 object-contain" src={product.image} />
                      <aside className="flex flex-col gap-5 items-start w-full">
                        <h3 className="text-lg text-[#446B80] font-medium">{product.title}</h3>
                        <p className="text-2xl text-[#7FC9F0] font-semibold">{product.price} ₽</p>
                        <PrimaryButton onClick={() => addToCart(product)} text="В корзину" />
                      </aside>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}