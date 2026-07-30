import { useContext } from "react";
import { cartContext } from "../../../context/context";
import PrimaryButton from "../../../components/ui/Buttons/PrimaryButton";
import { Button } from "@mui/material";
import Headline from "../../../components/ui/Headlines/Headline";
import ZakazCard from "./ZakazCard";
import UniversalBox from "./UniversalBox";
import { NavLink } from "react-router";

export default function MainCont(){
    const {cart, addToCart} = useContext(cartContext);

    return(
        <section className="className=flex lg:items-start flex-col lg:grid lg:grid-cols-8 gap-10 p-5 lg:px-0 max-w-300 m-auto py-10 pt-50 lg:pt-80 lg:py-25">
            <div className="flex flex-col gap-5 col-span-6">
                <h2 className="text-2xl lg:text-5xl font-semibold text-[#446B80]">Оформление заказа</h2>            
                <div className="flex flex-col items-center gap-5 lg:items-start py-10">
                    <Headline size="2xl" text="Состав Заказа"/>
                    {
                        cart.map(product => (
                            <ZakazCard product={product}/>
                        ))
                    }
                </div>

                <div className="flex py-5 flex-col gap-5 lg:min-w-120 w-full lg:w-auto">
                    <Headline size="2xl" text="Город получателя"/>
                    <UniversalBox>
                        <p>Населенный пункт</p>
                        <p className="text-lg">Москва</p>
                    </UniversalBox>
                </div>
                <div className="flex py-5 flex-col gap-5 w-full">
                    <Headline size="2xl" text="Город получателя"/>
                    <div className="flex flex-col lg:flex-row gap-5">
                        <UniversalBox>
                            <p>Транспортной компанией</p>
                            <p className="text-lg">СДЕК, Деловые линии, <br /> Мега Транс, TRADO</p>
                            <p>Цена зависит от выбора ТК</p>
                        </UniversalBox>
                        <UniversalBox>
                            <p>Почтой</p>
                            <p className="text-lg">В ближайшее отделение <br /> почти России</p>
                            <p className="text-[#7FC9F0]">Бесплатно</p>
                        </UniversalBox>
                        <UniversalBox>
                            <p>Самовывоз</p>
                            <p className="text-lg">В пункте выдачи</p>
                            <p className="text-[#7FC9F0]">Бесплатно</p>
                        </UniversalBox>
                    </div>
                </div>

                <div className="flex py-5 flex-col gap-5 w-full lg:w-auto">
                    <Headline size="2xl" text="Выбор транспортной компании"/>
                    <div className="flex flex-col lg:flex-row items-center gap-5">
                        <UniversalBox>
                            <p>СДЕК</p>
                        </UniversalBox>
                        <UniversalBox>
                            <p>Деловые линии</p>
                        </UniversalBox>
                        <UniversalBox>
                            <p>Мега Транс</p>
                        </UniversalBox>
                        <UniversalBox>
                            <p>TRADO</p>
                        </UniversalBox>
                    </div>
                </div>
                <NavLink className={"w-full"} to="oplata"><PrimaryButton width="100%" text="Перейти к оплате"/></NavLink>
            </div>


            <div className="flex flex-col text-[#446B80] gap-3 col-span-2 p-5 border rounded-xl border-[#DBDFE0]">
                <p>Ваш заказ</p>
                <div className="flex">
                    <Button sx={{ borderRadius:2.5, borderTopRightRadius: 0, borderBottomRightRadius: 0, width: "50%"}} variant="outlined">Промокод</Button>
                    <PrimaryButton width="50%" borderLeft={0} text="Применить"/>
                </div>
                <div className="flex justify-between w-full pb-2">
                    <p>Количество ({cart.reduce((counts, item) => counts + item.count ,0)})</p>
                    <p>{cart.reduce((sum, el) => sum+=el.price * el.count, 0)} ₽</p>
                </div>
                <div className="flex flex-col pt-5 border-t border-[#DBDFE0] gap-3">
                    <div className="flex w-full justify-between">
                        <p>Скидка</p>
                        <p>0 ₽</p>
                    </div>
                    <div className="flex w-full justify-between">
                        <p className="text-xl">Итого</p>
                        <p className="text-xl font-semibold">{cart.reduce((sum, el) => sum+=el.price * el.count, 0)} ₽</p>
                    </div>
                </div>
            </div>
        </section>
    )
}