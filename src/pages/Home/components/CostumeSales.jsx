import PrimaryButton from "../../../components/ui/Buttons/PrimaryButton";
import Headline from "../../../components/ui/Headlines/Headline";

import salesimg from "../../../assets/home/SalesCostume.png"

export default function CostumeSales(){

    return (
        <div className="flex flex-col gap-5 p-5 lg:flex-row max-w-300 m-auto items-center justify-between">
            <aside className="flex flex-col lg:items-start gap-10 lg:gap-5 lg:text-start text-center">
                <Headline text="Все детские костюмы с акцией 10%"/>
                <PrimaryButton text="Смотреть костюмы"/>
            </aside>
            <img className="w-130" src={salesimg} alt="" />
        </div>
    )
}