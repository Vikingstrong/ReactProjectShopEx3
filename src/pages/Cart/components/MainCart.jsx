import { Button } from "@mui/material";
import Headline from "../../../components/ui/Headlines/Headline";
import PrimaryButton from "../../../components/ui/Buttons/PrimaryButton";
import BuyCart from "./BuyCart";

import { useContext } from "react";
import { cartContext } from "../../../context/context";
import { NavLink } from "react-router";


export default function MainCart(){
    const {cart, addToCart} = useContext(cartContext);


    return (
        <section className="flex lg:items-start flex-col lg:grid lg:grid-cols-8 gap-10 p-5 lg:px-0 max-w-300 m-auto py-10 pt-50 lg:pt-80 lg:py-25">
            <div className="flex flex-col gap-5 col-span-6">
                <h2 className="text-2xl lg:text-5xl font-semibold text-[#446B80]">В корзине {cart.length} товара</h2>
                <div className="flex flex-col gap-3 border-t border-[#DFE2E4] pt-4">
                    {
                        cart.map(product => (
                            <BuyCart key={product.id} product={product}/>
                        ))
                    }
                </div>
            </div>

            <div className="flex flex-col text-[#446B80] gap-3 col-span-2 p-5 border rounded-xl border-[#DBDFE0]">
                <p>154  ₽  Доставка</p>
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
                    <NavLink to="/placing"><PrimaryButton text="Перейти к оформлению"/></NavLink>
                </div>
            </div>
        </section>
    )
}