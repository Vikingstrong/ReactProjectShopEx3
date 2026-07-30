import { Button } from "@mui/material";
import OutlinedButton from "../../../components/ui/Buttons/OutlineButton";
import { NavLink } from "react-router";

export default function Card({item, onDelete}){

    return (
        <div className="flex flex-col gap-3 shadow-[0_0_10px_lightgray] rounded-xl lg:w-[22%]">
            <img className="w-full h-40 object-cover rounded-t-xl" src={`https://to-dos-api.softclub.tj/images/${item.images[0].imageName}`} alt="" />
            <div className="p-5 flex flex-col gap-5">
                <p>{item.name}</p>
                <p>{item.description}</p>
                <div className="flex justify-between">
                    <NavLink to="infoBlog"><OutlinedButton text="Читать"/></NavLink>
                    <Button variant="contained" color="error" onClick={() => onDelete(item.id)}>Удалить</Button>
                </div>
            </div>
        </div>
    )
}