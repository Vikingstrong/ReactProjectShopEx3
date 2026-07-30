import { useEffect, useState } from "react"
import { get, deleteBlog } from "../../config/api"
import Card from "./components/Card";
import Headline from "../../components/ui/Headlines/Headline";
import { NavLink } from "react-router";

export default function Blog(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        async function getdata() {
            try {
                const info = await get();
                if(info) setData(info);
            } catch (error) {
            } finally {
                setLoading(false);
            }
        };
        getdata();
    }, [])

    async function handleDelete(id) {
        try {
            await deleteBlog(id);
            setData((prevData) => prevData.filter((item) => item.id !== id));
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <section className="flex flex-col max-w-300 m-auto px-5 lg:px-0 pt-50 lg:pt-65 py-10 gap-10">
            <div className="flex items-center gap-5 text-[#446B80]">
                <NavLink to="/">Главная</NavLink>
                <p>/Блог</p>
            </div>
            <Headline text="Блог"/>
            <div className="flex gap-10 lg:flex-row flex-wrap flex-col">
                {data.map(item => (
                    <Card key={item.id} item={item} onDelete={handleDelete}/>
                ))}
            </div>
        </section>
    )
}