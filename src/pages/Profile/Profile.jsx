import { User, Pencil } from "lucide-react";

export default function Profile() {
    return (
        <main className="w-full max-w-[1200px] m-auto px-5 lg:px-0 pt-60 pb-20">
            <h1 className="text-4xl font-semibold text-[#446B80] mb-10">Личные данные</h1>

            <div className="flex items-center gap-6 mb-12">
                <div className="w-20 h-20 bg-[#F3FAFF] rounded-full flex items-center justify-center shrink-0">
                    <User className="w-10 h-10 text-[#7FC9F0]" />
                </div>
                <p className="text-xl text-[#446B80] font-medium">annnaannnana@gmail.com</p>
            </div>

            <div className="max-w-[500px] flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-10">
                        <span className="w-32 text-gray-500">Имя</span>
                        <div className="flex items-center gap-2">
                            <span className="text-[#446B80] font-medium">Анна</span>
                            <Pencil className="w-4 h-4 text-[#7FC9F0] cursor-pointer" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-10">
                        <span className="w-32 text-gray-500">Телефон</span>
                        <button className="text-[#7FC9F0] hover:underline cursor-pointer">Добавить</button>
                    </div>
                </div>

                <div className="w-full h-px bg-gray-100 my-2"></div>

                <div className="flex flex-col gap-2">
                    <span className="text-gray-500 mb-1">Адреса доставки</span>
                    <span className="text-[#446B80]">Москва, ул. Московская 25-45</span>
                </div>

                <div className="w-full h-px bg-gray-100 my-2"></div>

                <div className="flex flex-col gap-2">
                    <span className="text-gray-500 mb-2">Пароль</span>
                    <div className="flex items-center gap-5">
                        <input
                            type="password"
                            value="****************"
                            readOnly
                            className="border border-gray-200 rounded-lg p-3 outline-none text-gray-400 w-full max-w-[300px] tracking-widest"
                        />
                        <button className="text-[#7FC9F0] hover:underline cursor-pointer whitespace-nowrap">Изменить</button>
                    </div>
                </div>
            </div>
        </main>
    );
}
