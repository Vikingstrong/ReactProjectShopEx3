

export default function Headline({text, size="6xl"}){

    return (
        <h2 className={`font-semibold text-3xl lg:text-${size} text-[#446B80]`}>{text}</h2>
    )
}