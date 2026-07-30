import { Search } from "lucide-react";
import PrimaryButton from "../Buttons/PrimaryButton";


export default function InputSearch(){

    return(
        <div className="flex">
            <div className="flex items-center gap-3 px-3 py-2 bg-[#F2F2F2] rounded-lg rounded-r-none w-full">
                <Search className="w-5 h-5" />
                <input className="outline-none text-[#446B80]" type="text" placeholder="Я хочу купить..."/>
            </div>
            <PrimaryButton borderLeft={0} text="Найти"/>
        </div>
    )
}