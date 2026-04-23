import Banner from '../components/Banner'

export default function Workshop() {
    return (
        <div className="flex flex-col w-full">
            <Banner
                isLanding={false}
                title="Workshop"
                backgroundImage="/img/workshop.jpg"
            />

            <div className="flex flex-col gap-8 md:gap-16 items-center w-full h-fit px-2.5 py-10 md:p-32">
                <h2>Schedule Your Workshop</h2>

                <div></div>
            </div>
        </div>
    )
}
