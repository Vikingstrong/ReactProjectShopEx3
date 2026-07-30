import { useContext } from "react";
import { cartContext } from "../../context/context";
import Headline from "../../components/ui/Headlines/Headline";

import bankCard from "../../assets/oplata/bankcard.png"
import { NavLink } from "react-router";
import PrimaryButton from "../../components/ui/Buttons/PrimaryButton";

export default function OplataZakaza(){
    const {cart, addToCart} = useContext(cartContext);

    return(
        <>
            <div className="flex p-5 lg:px-0 max-w-300 m-auto text-[#446B80] gap-3 py-5 pt-50 lg:pt-65">
                <p>Корзина</p>
                <p>/Оформление заказа</p>
                <p>/Оплата</p>
            </div>
            <p className="p-5 lg:px-0 py-5 max-w-300 m-auto">Заказ №123214155AAS</p>
            <div className="flex flex-col gap-5 max-w-300 m-auto p-5 lg:px-0">
                <Headline size="2xl" text="Итого к оплате"/>
                <p className="text-xl text-[#446B80]">{cart.reduce((sum, item) => sum + item.price * item.count, 0)} ₽</p>
            </div>
            <div className="p-5 lg:px-0 max-w-300 m-auto">
                <img src={bankCard} alt="" />
            </div>
            <div className="max-w-300 m-auto p-5 lg:px-0 w-full">
                <NavLink className="w-full lg:w-100" to="/"><PrimaryButton text="Оплатить"/></NavLink>
            </div>
        </>
    )
}