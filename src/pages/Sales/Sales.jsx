import Headline from "../../components/ui/Headlines/Headline";

import img1 from "../../assets/sales/img1.png"
import img2 from "../../assets/sales/img2.png"
import img3 from "../../assets/sales/img3.png"

export default function Sales(){

    return(
        <>
            <div className="flex flex-col max-w-300 m-auto px-5 lg:px-0 pt-50 lg:pt-70 py-10 gap-5">
                <div className="flex gap-3 text-[#446B80]">
                    <p>Главная</p>
                    <p>/Акции</p>
                </div>
                <Headline text="Акции"/>
                <div className="flex flex-col gap-5 lg:flex-row flex-wrap py-10 justify-between">
                    <div className="flex flex-col gap-2 text-[#446B80] lg:w-[48%]">
                        <img src={img1  } alt="" />
                        <p>25.05.2020</p>
                        <h3 className="text-lg font-semibold">Вкусные скдидки до -25% на все детское питание</h3>
                    </div>
                    <div className="flex flex-col gap-2 text-[#446B80] lg:w-[48%]">
                        <img src={img2} alt="" />
                        <p>25.05.2020</p>
                        <h3 className="text-lg font-semibold">Вкусные скдидки до -25% на все детское питание</h3>
                    </div>
                    <div className="flex flex-col gap-2 text-[#446B80] lg:w-[48%]">
                        <img src={img3} alt="" />
                        <p>25.05.2020</p>
                        <h3 className="text-lg font-semibold">Вкусные скдидки до -25% на все детское питание</h3>
                    </div>
                </div>
            </div>
        </>
    )
}