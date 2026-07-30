import logo from "../../assets/common/logo.png";
import { Camera, Headset, MessageCircle, Phone } from "lucide-react";
import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 border-t border-[#EBE7E7]">
      <div className="flex flex-col-reverse lg:flex-row items-center text-center lg:items-start gap-4 lg:gap-10 text-[#446B80] justify-between max-w-300 m-auto p-5 lg:px-0">
        <div className="flex items-center gap-5">
          <img src={logo} alt="" />
          <p>Онлайн гипермаркет <br /> товаров для детей</p>
        </div>
        <nav className="flex flex-col gap-1 lg:gap-5">
          <p>О нас</p>
          <p>Акции</p>
          <p>Блог</p>
          <p>Контакты</p>
        </nav>
        <nav className="flex flex-col gap-1 lg:gap-5">
          <p>Вовзрат и гарантия</p>
          <p>Оплата и доставка</p>
        </nav>
        <nav className="flex flex-col gap-1 lg:gap-5">
          <p>Оптовым клиентам</p>
        </nav>
        <nav className="flex flex-col gap-3 lg:gap-5">
          <p>Мы в социальных сетях</p>
          <div className="flex items-center gap-5 text-[#7FC9F0]">
            <Camera />
            <MessageCircle />
            <Phone />
            <Headset />
          </div>
        </nav>
      </div>
    </footer>
  );
}
