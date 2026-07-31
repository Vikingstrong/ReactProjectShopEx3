import { Menu, ShoppingCart, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../../assets/common/logo.png"
import InputSearch from "../ui/Inputs/InputSearch";
import { NavLink } from "react-router";

export default function HeaderForMobile() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    const navLinks = [
        { name: "Акции", path: "sales" },
        { name: "О нас", path: "infoCompany" },
        { name: "Блог", path: "blog" },
        { name: "Каталог Товаров", path: "catalog" },
        { name: "Возврат", path: "/" },
        { name: "Оплата и доставка", path: "dostavka" },
        { name: "Контакты", path: "contact" },
    ];

    return (
        <>
            <header className="flex lg:hidden flex-col gap-8 left-1/2 -translate-x-1/2 absolute z-50 w-full p-5">
                <div className="flex justify-between items-center w-full">
                    <Menu
                        className="w-7 h-7 text-[#7FC9F0] cursor-pointer"
                        onClick={() => setIsMenuOpen(true)}
                    />
                    <div className="flex gap-3 items-center">
                        <NavLink to="/"><img className="mr-5" src={logo} alt="" /></NavLink>
                        <NavLink to="/">Онлайн гипермаркет <br /> товаров для детей</NavLink>
                    </div>
                    <NavLink to="cart"><ShoppingCart className="w-7 h-7 text-[#7FC9F0]" /></NavLink>
                </div>
                <InputSearch />
            </header>

            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/30 z-[100] transition-opacity lg:hidden"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            <div className={`fixed top-0 left-0 h-[100dvh] w-[85%] max-w-[320px] bg-[#446B80] z-100 transform transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex justify-end p-6">
                    <X
                        className="w-8 h-8 text-white cursor-pointer hover:text-gray-200 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    />
                </div>
                <nav className="flex flex-col px-8 pb-10 overflow-y-auto h-[calc(100%-80px)]">
                    <ul className="flex flex-col gap-8">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink
                                    to={link.path}
                                    className="text-white text-[22px] font-light tracking-wide hover:text-[#7FC9F0] transition-colors block w-full"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}