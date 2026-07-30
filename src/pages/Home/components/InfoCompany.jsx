import Headline from "../../../components/ui/Headlines/Headline";


export default function InfoCompany(){

    return (
        <section className="py-10 max-w-300 m-auto p-5 lg:px-0 flex flex-col gap-10 items-center text-center">
           <h2 className={`font-semibold text-3xl lg:text-[42px] lg:px-40 text-[#446B80]`}>Карапуз - это онлайн гипермаркет товаров для детей. С нами вырастают поколения!</h2>
            <div className="flex gap-5 flex-wrap justify-between">
                <div className="flex flex-col w-[45%] lg:w-[23%] lg:p-10 text-center gap-5 items-center lg:border border-[#7FC9F0] rounded-lg hover:bg-[#7FC9F0] transition-all duration-300 group">
                    <p className="text-white bg-[#7FC9F0] rounded-4xl px-4 py-2 text-start text-3xl">1</p>
                    <p className="text-[#446B80] w-full group-hover:text-white transition duration-200">Все товары для детей в одном месте</p>
                </div>
                <div className="flex flex-col w-[45%] lg:w-[23%] lg:p-10 text-center gap-5 items-center lg:border border-[#7FC9F0] rounded-lg hover:bg-[#7FC9F0] transition-all duration-300 group">
                    <p className="text-white bg-[#7FC9F0] rounded-4xl px-4 py-2 text-start text-3xl">2</p>
                    <p className="text-[#446B80] w-full group-hover:text-white transition duration-200">Цены ниже, чем у конкурентов</p>
                </div>
                <div className="flex flex-col w-[45%] lg:w-[23%] lg:p-10 text-center gap-5 items-center lg:border border-[#7FC9F0] rounded-lg hover:bg-[#7FC9F0] transition-all duration-300 group">
                    <p className="text-white bg-[#7FC9F0] rounded-4xl px-4 py-2 text-start text-3xl">3</p>
                    <p className="text-[#446B80] w-full group-hover:text-white transition duration-200">Официальные дилеры лучших мировых производителей</p>
                </div>
                <div className="flex flex-col w-[45%] lg:w-[23%] lg:p-10 text-center gap-5 items-center lg:border border-[#7FC9F0] rounded-lg hover:bg-[#7FC9F0] transition-all duration-300 group">
                    <p className="text-white bg-[#7FC9F0] rounded-4xl px-4 py-2 text-start text-3xl">4</p>
                    <p className="text-[#446B80] w-full group-hover:text-white transition duration-200">Собственное эко-производство</p>
                </div>
            </div>
        </section>
    )
}