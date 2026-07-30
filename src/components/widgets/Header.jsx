import { MapPin, ShoppingCart, User, X, Package, Heart, Settings, LogOut } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import logo from "../../assets/common/logo.png"
import PrimaryButton from "../ui/Buttons/PrimaryButton"
import InputSearch from "../ui/Inputs/InputSearch"
import { NavLink } from "react-router"

export default function Header(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showPopover, setShowPopover] = useState(false);
    const popoverRef = useRef(null);

    useEffect(() => {
        const storedLogin = localStorage.getItem("isLoggedIn");
        if (storedLogin === "true") {
            setIsLoggedIn(true);
        }
    }, []);

    useEffect(() => {
        function handleClickOutside(event) {
            if (popoverRef.current && !popoverRef.current.contains(event.target)) {
                setShowPopover(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogin = () => {
        localStorage.setItem("isLoggedIn", "true");
        setIsLoggedIn(true);
        setShowPopover(false);
    };

    const handleLogout = () => {
        localStorage.setItem("isLoggedIn", "false");
        setIsLoggedIn(false);
        setShowPopover(false);
    };

    return(
        <header className="hidden left-1/2 -translate-x-1/2 absolute z-50 w-full flex-col lg:flex max-w-300 m-auto justify-between gap-0 py-5">
            <div className="flex items-center justify-between py-5">
                <div className="flex items-center gap-5">
                    <NavLink to="/"><img className="mr-5" src={logo} alt="" /></NavLink>
                    <PrimaryButton text="Каталог товаров"/>
                    <InputSearch/>
                </div>
                <div className="flex items-center gap-10">
                    <div className="relative" ref={popoverRef}>
                        <div 
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={() => setShowPopover(!showPopover)}
                        >
                            <User className="text-[#7FC9F0]"/>
                            <p className="text-[#446B80] text-lg select-none hover:text-[#6EB9E0] transition-colors">
                                {isLoggedIn ? "Личный кабинет" : "Войти в личный кабинет"}
                            </p>
                        </div>
                        
                        {showPopover && !isLoggedIn && (
                            <div className="absolute top-8 left-0 bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] w-80 border border-gray-100 mt-2">
                                <div className="flex justify-between items-center mb-5">
                                    <h3 className="text-[#7FC9F0] text-lg font-medium">Регистрация</h3>
                                    <X className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" onClick={() => setShowPopover(false)} />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <input type="email" placeholder="Электронный адрес" className="border border-gray-200 rounded-lg p-3 outline-none focus:border-[#7FC9F0] text-[#446B80] placeholder-gray-400" />
                                    <input type="password" placeholder="Пароль" className="border border-gray-200 rounded-lg p-3 outline-none focus:border-[#7FC9F0] text-[#446B80] placeholder-gray-400" />
                                    <div className="flex items-center justify-between mt-1">
                                        <button onClick={handleLogin} className="bg-[#7FC9F0] text-white py-2 px-8 rounded-full hover:bg-[#6EB9E0] transition-colors font-medium cursor-pointer">Войти</button>
                                        <a href="#" className="text-[#7FC9F0] text-sm hover:underline">Забыли пароль?</a>
                                    </div>
                                </div>
                            </div>
                        )}

                        {showPopover && isLoggedIn && (
                            <div className="absolute top-8 left-0 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] w-100 border border-gray-100 overflow-hidden mt-2">
                                <div className="flex items-center gap-4 p-5 border-b border-gray-100">
                                    <div className="w-11 h-11 bg-[#F3FAFF] rounded-full flex items-center justify-center shrink-0">
                                        <User className="w-5 h-5 text-[#7FC9F0]" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-gray-800 font-medium truncate text-[15px]">Анна</p>
                                        <p className="text-gray-400 text-[13px] truncate">annnaannnana@gmail.com</p>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <button className="w-full flex items-center gap-3 p-2.5 hover:bg-gray-50 rounded-lg text-[#446B80] transition-colors cursor-pointer">
                                        <Package className="w-5 h-5 text-[#7FC9F0]" />
                                        <span className="text-[15px]">Мои заказы</span>
                                    </button>
                                    <button className="w-full flex items-center gap-3 p-2.5 hover:bg-gray-50 rounded-lg text-[#446B80] transition-colors cursor-pointer">
                                        <Heart className="w-5 h-5 text-[#7FC9F0]" />
                                        <span className="text-[15px]">Мое избранное</span>
                                    </button>
                                    <div className="h-px bg-gray-100 my-1 mx-2"></div>
                                    <NavLink to="/profile" onClick={() => setShowPopover(false)} className="w-full flex items-center gap-3 p-2.5 hover:bg-gray-50 rounded-lg text-[#446B80] transition-colors cursor-pointer">
                                        <Settings className="w-5 h-5 text-[#7FC9F0]" />
                                        <span className="text-[15px]">Настройки личных данных</span>
                                    </NavLink>
                                    <button onClick={handleLogout} className="w-full flex items-center gap-3 p-2.5 hover:bg-gray-50 rounded-lg text-[#446B80] transition-colors cursor-pointer">
                                        <LogOut className="w-5 h-5 text-[#7FC9F0]" />
                                        <span className="text-[15px]">Выйти</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        <ShoppingCart className="text-[#7FC9F0]"/>
                        <NavLink to="cart" className="text-[#446B80] text-lg">Корзина</NavLink>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between text-[#446B80] border-t border-[#EBE7E7] py-5">
                <NavLink to="/" className="font-semibold">Онлайн гипермаркет <br /> товаров для детей</NavLink>
                <nav className="flex items-center gap-5 cursor-pointer">
                    <NavLink to="sales">Акции</NavLink>
                    <NavLink to="">О нас</NavLink>
                    <NavLink to="blog">Блог</NavLink>
                    <NavLink to="catalog">Каталог Товаров</NavLink>
                    <NavLink to="">Возврат</NavLink>
                    <NavLink to="dostavka">Оплата и доставка</NavLink>
                    <NavLink to="contact">Контакты</NavLink>
                </nav>
                <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <p>Город: <span className="text-[#7FC9F0]">Москва</span></p>
                </div>
            </div>
        </header>
    )
}