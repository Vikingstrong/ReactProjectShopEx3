

export default function UniversalBox({children,}){

    return (
        <div className="p-4 rounded-xl w-full lg:w-auto flex flex-col gap-2 border border-[#DBDFE0] hover:border-[#7FC9F0] text-[#446B80]">
            {children}
        </div>
    )
}