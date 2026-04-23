import Banner from '../components/Banner'

export default function Workshop() {
    return (
        <div className="flex flex-col w-full">
            <Banner
                isLanding={false}
                title="Workshop"
                backgroundImage="/img/workshop.jpg"
            />
        </div>
    )
}
