import ButtonAccent from "./ButtonAccent";

interface BannerProps {
    isLanding?: boolean;
    title?: string;
    backgroundImage: string;
}

export default function Banner({
    isLanding,
    title,
    backgroundImage,
}: BannerProps) {
    return (
        <div className="text-neutral-100 w-full h-fit md:h-[600px] px-2.5 py-10 md:p-32 relative">
            <div className="absolute inset-0 bg-brand-500"></div>

            <div
                className="absolute inset-0 bg-cover bg-center opacity-70"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>

            <div
                className={`flex flex-col gap-8 ${isLanding ? "w-fit md:w-[750px]" : "w-full"} h-full justify-center relative z-10`}
            >
                {isLanding ? (
                    <>
                        <h1 className="font-medium drop-shadow-4xl">
                            Bring the Forest Home
                        </h1>
                        <p className="text-[24px]">
                            Create your own living world with premium terrarium
                            kits and immersive, hands-on workshops—designed for
                            calm, creativity, and connection.
                        </p>
                        <div className="flex flex-row justify-evenly md:justify-start gap-8 w-full">
                            <ButtonAccent children="Shop DIY Kits" />
                            <ButtonAccent children="Book a Workshop" />
                        </div>
                    </>
                ) : (
                    <h1 className="font-medium drop-shadow-2xl underline underline-offset-8 self-center">
                        {title}
                    </h1>
                )}
            </div>
        </div>
    );
}
