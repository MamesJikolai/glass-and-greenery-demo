import Banner from '../components/Banner'

export default function DigiCareGuide() {
    return (
        <div className="flex flex-col w-full">
            <Banner
                isLanding={false}
                title="Digital Care Guide & FAQ"
                backgroundImage="/img/landing.jpg"
            />

            <div className="flex flex-col gap-8 md:gap-16 items-center w-full h-fit px-2.5 py-10 md:p-32"></div>
        </div>
    )
}
