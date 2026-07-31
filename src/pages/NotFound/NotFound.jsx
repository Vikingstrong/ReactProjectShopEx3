import { NavLink } from "react-router"
import PrimaryButton from "../../components/ui/Buttons/PrimaryButton"

export default function NotFound(){

    return (
        <section className="flex text-[#446B80] items-center text-center justify-center flex-col py-15 pt-50 lg:pt-65">
            <div className="w-1/4 flex flex-col gap-3 items-center text-center justify-center">
                <h1 className="text-2xl lg:text-6xl">404</h1>
                <h3 className="font-semibold text-lg">Страница Не Найдена</h3>
                <p>Мы не можем найти страницу, которую вы ищете. Она может быть еще не зарегестрирована или её не существует</p>
                <NavLink to="/"><PrimaryButton text="На главную"/></NavLink>
            </div>
        </section>
    )
}