import PrimaryButton from "../Buttons/PrimaryButton";

import { useContext } from "react";
import { cartContext } from "../../../context/context";

export default function ProductCard({product}){

    const {cart, addToCart,} = useContext(cartContext);

    return(
        <div className="flex w-full flex-col min-h-120 p-5 gap-5 shadow-[0px_0px_3px_lightgray] rounded-lg lg:items-center text-center">
            <img className="w-full object-cover h-50 lg:w-40 rounded-xl" src={product.image} alt="" />
            <h3 className="text-xl font-semibold text-[#446B80] line-clamp-2">{product.title}</h3>
            <p className="text-2xl font-semibold text-[#7FC9F0]">{product.price} ₽</p>
            <PrimaryButton onClick={() => addToCart(product)} text="В корзину"/>
            <p className="text-[#7FC9F0] text-xl">Купить в один клик</p>
        </div>
    )
}