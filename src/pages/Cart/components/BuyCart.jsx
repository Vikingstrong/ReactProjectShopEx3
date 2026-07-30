import { Button } from "@mui/material";
import { Heart, Trash } from "lucide-react";

import { useContext } from "react";
import { cartContext } from "../../../context/context";

export default function BuyCart({product}){
    const {addToCart, minusToCart, deleteForCart} = useContext(cartContext);

    return (
        <div className="flex lg:grid gap-5 grid-cols-12 w-full flex-col items-center text-center lg:text-start lg:items-start py-4 justify-between border-b border-[#DFE2E4]">
            <img className="lg:w-40 col-span-2 object-contain h-40" src={product.image} alt="" />
            <p className="text-[#446B80] col-span-4">{product.title}</p>
            <div className="flex flex-col lg:flex-row col-span-3 gap-5">
                <div className="flex items-center gap-5">
                    <Button variant="outlined" onClick={() => minusToCart(product)}>-</Button>
                    <p>{product.count}</p>
                    <Button variant="outlined" onClick={() => addToCart(product)}>+</Button>
                </div>
            </div>
            <p className="text-[#7FC9F0] text-xl font-semibold col-span-2">{product.price * product.count} ₽</p>
            <div className="flex lg:flex-col gap-5 col-span-1">
                <Heart/>
                <Trash onClick={() => deleteForCart(product)}/>
            </div>
        </div>
    )
}