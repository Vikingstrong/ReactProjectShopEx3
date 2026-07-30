
import heroImg from "../../../assets/home/heroImg.png"
import PrimaryButton from "../../../components/ui/Buttons/PrimaryButton"

export default function Hero(){

    return (
        <section className="bg-[#FCF6F5] pt-45 lg:pt-85">
            <div className="flex flex-col px-5 lg:flex-row justify-between gap-10 max-w-300 m-auto items-center">
                <aside className="flex flex-col items-center lg:gap-8 text-center gap-5 lg:text-start lg:items-start">
                    <h1 className="text-[#446B80] text-3xl font-bold lg:text-6xl">Все самое необходимое для вашего ребенка</h1>
                    <p className="text-[#446B80] lg:text-xl">Посмотрите нашу новую подборку <br /> для ухода за вашим ребенком</p>
                    <PrimaryButton text="Смотреть" width={{ xs: '100%', lg: 'auto' }}/>
                </aside>
                <img className="lg:w-150" src={heroImg} alt="" />
            </div>
        </section>
    )
}