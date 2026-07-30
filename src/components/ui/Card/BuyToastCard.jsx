import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import { cartContext } from "../../../context/context";

export default function BuyToastCard(){
    const { toastProduct, setToastProduct } = useContext(cartContext);
    const location = useLocation();
    const [show, setShow] = useState(false);


    useEffect(() => {
        if (toastProduct) {
            const frame = requestAnimationFrame(() => setShow(true));
            return () => cancelAnimationFrame(frame);
        } else {
            setShow(false);
        }
    }, [toastProduct]);

    useEffect(() => {
        if (location.pathname === "/cart" && toastProduct) {
            setToastProduct(null);
        }
    }, [location.pathname, toastProduct]);
    
    if(!toastProduct) return null
    if(location.pathname == "/cart") return null;

    return (
        <div className={`flex transition-all duration-300 max-w-9/10 lg:max-w-120 flex-col bg-white left-5 lg:left-auto z-10 fixed lg:right-5 bottom-5 gap-5 text-[#446B80] p-5 rounded-xl shadow-[0_0_10px_lightgray] ${
        show ? "opacity-100 translate-y-0 lg:translate-x-0" 
        : "opacity-0 translate-y-10 lg:translate-y-0 lg:translate-x-10"}`}>
            <div className="flex justify-between">
                <p>Товар добавлен в корзину</p>
                <p className="cursor-pointer py-1 px-3 rounded-2xl transition duration-200 hover:bg-[#b7b7b7] hover:text-[#ffffff]" onClick={() => setToastProduct(null)}>X</p>
            </div>
            <div className="flex items-center gap-5">
                <img className="w-30 h-30 lg:w-50 lg:h-50" src={toastProduct.image} alt="" />
                <div className="flex flex-col">
                    <p className="line-clamp-2">{toastProduct.title}</p>
                    <p className="text-2xl font-semibold text-[#7FC9F0]">{toastProduct.price} ₽</p>
                </div>
            </div>
            <Button variant="outlined"><NavLink to="cart">Перейти в корзину</NavLink></Button>
        </div>
    )
}