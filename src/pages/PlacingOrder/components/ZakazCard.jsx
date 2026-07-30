

export default function ZakazCard({product}){

    return (
        <div className="flex gap-5 text-[#446B80]">
            <img className="object-cover rounded-xl w-50 h-50" src={product.image} alt="" />
            <div className="flex flex-col gap-3">
                <p className="text-lg">{product.title}</p>
                <p>{product.count} шт.</p>
            </div>
        </div>
    )
}