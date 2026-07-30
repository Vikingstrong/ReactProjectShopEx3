import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";

import babyImg1 from "../../../assets/blog/baby1.png"
import babyImg2 from "../../../assets/blog/baby2.png"
import babyImg3 from "../../../assets/blog/baby3.png"
import Headline from "../../../components/ui/Headlines/Headline";

export default function InfoBlog(){

    return (
        <section className="max-w-300 m-auto p-5 text-[#446B80] lg:px-0 py-10 pt-50 lg:pt-65 flex flex-col gap-5" >
            <div className="flex flex-col gap-5 items-center">
                <Swiper 
                    className="w-full lg:w-5/8"
                    slidesPerView={1}
                    spaceBetween={16}
                >
                    <SwiperSlide><img src={babyImg1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={babyImg2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={babyImg3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={babyImg1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={babyImg2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={babyImg3} alt="" /></SwiperSlide>
                </Swiper>
                <Headline text="Питание в I триместре"/>
                <p className="lg:w-5/6">В 1-м триместре беременности рацион женщины существенно не отличается от ее   меню до беременности, могут лишь   поменяться вкусы беременной. Но уже    сейчас нужно начать придерживаться  принципов правильного питания, чтобы  избежать токсикоза и заложить основу  правильного развития эмбриона.</p>
                <p className="lg:w-5/6">Постарайтесь включить в меню ежедневно зеленые салаты с растительным маслом и морскую рыбу. Важно начать прием препаратов фолиевой кислоты, йода и витамина Е, принимать на протяжении всей беременности. Из-за повышенной работы печени и почек целесообразно в самом начале  беременности значительно ограничить в рационе количество острых блюд и таких пряностей, как перец, горчица, уксус. Для снижения нагрузки на печень жареное и жирное старайтесь заменить на отварное и тушеное, ограничьте употребление сливочного масла, сметаны высокой жирности, сливок, растительного масла. Творог употреблять маложирный. Наряду с овощами и фруктами, кушайте хлеб грубого помола, так как в нем содержится клетчатка и витамины группы В.</p>
            </div>
        </section>
    )
}