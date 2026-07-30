
import { productsData } from "../../../data/data"
import OutlinedButton from "../../../components/ui/Buttons/OutlineButton"
import Headline from "../../../components/ui/Headlines/Headline"

export default function PopularCategories(){

    const newCategoryData = productsData.slice(2, 5)

    return (
        <section className="flex flex-col items-center gap-10 max-w-300 m-auto lg:px-0 p-5 lg:py-20">
            <Headline text="Популярные категории"/>
            <div className="flex flex-col lg:flex-row items-center gap-5">
                {
                    newCategoryData.map(product => (
                        <div key={product.id} className="flex lg:min-h-80 w-full lg:w-1/3 items-center gap-10 bg-[#FDF6EF] p-5 rounded-xl">
                            <div className="flex flex-col gap-5 text-[#446B80] items-start">
                                <h4 className="text-lg lg:text-2xl font-semibold">{product.title}</h4>
                                <p className="text-sm lg:text-lg lg:mb-10">{product.description}</p>
                                <OutlinedButton text="Смотреть"/>
                            </div>
                            <img className="w-1/2 object-cover lg:w-40 h-40 lg:h-70 rounded-lg" src={product.image} alt="" />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}