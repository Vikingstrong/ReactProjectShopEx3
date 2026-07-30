import ProductCard from "../../../components/ui/Card/ProductCard";
import Headline from "../../../components/ui/Headlines/Headline";

import { productsData } from "../../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"

export default function NewProducts(){

    const dataNew = productsData.slice(6, 14)

    return (
        <section className="flex flex-col items-center text-center p-5 py-10 px-0 max-w-300 m-auto gap-10">
            <Headline text="Новинки"/>
            <Swiper 
                className="w-full"
                slidesPerView={2}
                spaceBetween={16}
                breakpoints={{
                    1024: {slidesPerView: 4}
                }}
            >
                {
                    dataNew.map(product => (
                        <SwiperSlide key={product.id}>
                            <ProductCard product={product}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}