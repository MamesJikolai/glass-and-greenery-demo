import ButtonAccent from './ButtonAccent'

export default function Navbar() {
    return (
        <div className="bg-brand-500 flex flex-row justify-between w-full h-fit p-2.5 md:px-8 md:py-4">
            <img
                src="/logo/banner-no bg.png"
                className="w-[170.25px] h-[56.25px] md:w-[225px] md:h-[75px]"
            />

            <div className="flex flex-row items-center gap-3">
                <ButtonAccent children="Shop" className="rounded-3xl" />
                <ButtonAccent children="Workshop" className="rounded-3xl" />
                <button className="relative inline-flex items-center justify-center group cursor-pointer">
                    {/* The Icon */}
                    <span className="material-symbols-outlined !text-[40px] text-accent-500 group-hover:text-accent-600 transition-colors">
                        shopping_cart
                    </span>

                    {/* The Badge */}
                    <div className="absolute -top-1.5 -right-1.5 flex items-center justify-center w-5 h-5 bg-accent-500 group-hover:bg-accent-600 text-white text-[12px] font-bold rounded-full transition-colors">
                        3
                    </div>
                </button>
            </div>
        </div>
    )
}
