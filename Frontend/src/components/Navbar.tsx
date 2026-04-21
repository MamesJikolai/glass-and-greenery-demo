import ButtonAccent from "./ButtonAccent";

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
            </div>
        </div>
    );
}
