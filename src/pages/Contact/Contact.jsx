import Headline from "../../components/ui/Headlines/Headline";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function Contact(){

    return(
        <section className="max-w-300 m-auto p-5 text-[#446B80] lg:px-0 py-10 pt-50 lg:pt-65 flex flex-col gap-5">
            <Headline text="Контакты"/>
            <div className="flex flex-col gap-3">
                <Headline size="2xl" text="Адрес"/>
                <p>Республика Дагестан, г Махачкала, улица Батырая 108</p>
            </div>
            <div className="flex flex-col gap-3">
                <Headline size="2xl" text="Телефон"/>
                <p>+ 7 872 278 08 58</p>
                <p>+7 988 799 93 27</p>
            </div>
            <div className="flex flex-col gap-3">
                <Headline size="2xl" text="Электронный адрес"/>
                <p>karapuz_108@mail.ru</p>
            </div>
            <YMaps query={{apikey: "82cf6f34-a9ce-4d77-aabd-7a12f8eb5903"}}>
                <div className="w-full">
                    <Map width="100%" height="500px" defaultState={{ center: [38.563610, 68.758972], zoom: 19 }}>
                        <Placemark
                            geometry={[38.563610, 68.758972]}
                            properties={{
                                balloonContent: 'ул. Рахими 12, Душанбе'
                            }}
                            options={{
                                preset: 'islands#blueCircleDotIcon'
                            }}  
                        />
                    </Map>
                </div>
            </YMaps>
        </section>
    )
}