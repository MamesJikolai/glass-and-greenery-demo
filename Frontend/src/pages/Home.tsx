import { useState } from 'react'
import ButtonAccent from '../components/ButtonAccent'
import Banner from '../components/Banner'
import { faqContent } from '../assets/faq'

export default function Home() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    const experienceContent = [
        {
            title: 'DIY Terrarium Kits',
            description:
                'Everything you need to build your own miniature ecosystem at home. Perfect for gifting, unwinding, or discovering a new creative ritual.',
            button: 'Shop DIY Kits',
        },
        {
            title: 'Guided Workshops',
            description:
                'Join intimate, hands-on sessions in the city. Learn the art of terrarium building in a calm, welcoming space.',
            button: 'Book a DIY Workshop',
        },
    ]

    const testimonialContent = [
        "“I didn't realize how much I needed this until I sat down and started building my terrarium. Glass & Greenery isn't just a kit—it's a full-on escape. The materials felt so premium, and the mosses were unlike anything I've seen in regular stores. It's now the calmest corner of my apartment.”",
        '“The workshop was magical. It felt like stepping into a tiny forest in the middle of the city. The guidance was thoughtful without being overwhelming, and I loved learning about each element we used. You can tell Glass & Greenery really cares about both the craft and the experience.”',
        "“I gave a Glass & Greenery kit as a gift, and it honestly blew everything else out of the water. The hand-blown glass alone was stunning, but the whole experience of creating something alive made it unforgettable. It's not just a product—it's a memory.”",
        "“I've tried DIY terrarium kits before, but nothing compares to this. The materials are on a completely different level—rare mosses, beautiful textures, and that gorgeous glass vessel. It felt curated, intentional, and genuinely inspiring.”",
    ]

    const onToggle = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index)
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonialContent.length - 1 : prevIndex - 1
        )
        console.log(testimonialContent[currentIndex])
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonialContent.length - 1 ? 0 : prevIndex + 1
        )

        console.log(testimonialContent[currentIndex])
    }

    return (
        <div className="flex flex-col w-full">
            <Banner isLanding={true} backgroundImage="/img/landing.jpg" />

            <div className="flex flex-col gap-8 md:gap-16 text-center bg-brand-500 text-neutral-100 w-full h-fit px-2.5 py-10 md:p-16">
                <h2>What Makes Us Different?</h2>

                <div className="flex flex-row flex-wrap justify-center text-left md:text-center gap-y-8 md:gap-x-32 md:gap-y-16">
                    <div className="w-fit md:w-[500px]">
                        <h3>Not Just Plants. A Ritual.</h3>
                        <p className="text-[16px] md:text-[24px]">
                            At Glass & Greenery, we believe building a terrarium
                            is more than a hobby—it's a moment of stillness in a
                            fast-moving world. Every kit and workshop is
                            designed to help you slow down, work with your
                            hands, and reconnect with nature.
                        </p>
                    </div>
                    <div className="w-fit md:w-[500px]">
                        <h3>Crafted with Intention</h3>
                        <p className="text-[16px] md:text-[24px]">
                            Our terrariums feature ethically sourced, rare
                            mosses and artisan hand-blown glass vessels—no
                            plastic, no shortcuts. Just thoughtfully curated
                            materials that transform small spaces into living
                            sanctuaries.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-8 md:gap-16 items-center w-full h-fit px-2.5 py-10 md:p-32">
                <h2>Choose Your Experience</h2>

                <div className="flex flex-row flex-wrap gap-8 md:gap-16 text-neutral-100">
                    {experienceContent.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-2 bg-surface-primary w-full md:w-[400px] p-4 rounded-4xl"
                        >
                            <div className="bg-accent-500 w-full h-[240px] rounded-t-3xl shrink-0"></div>
                            <h3>{item.title}</h3>
                            <p className="flex-1">{item.description}</p>
                            <ButtonAccent
                                children={item.button}
                                className="w-full"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-8 md:gap-16 items-center bg-brand-500 text-neutral-100 w-full h-fit px-2.5 py-10 md:p-32">
                <h2>FAQ</h2>

                <div className="flex flex-col gap-8 w-full">
                    {faqContent[0].content.slice(0, 3).map((item, index) => (
                        <div
                            key={index}
                            className="bg-surface-primary p-4 md:p-8 rounded-4xl"
                        >
                            <div
                                className="flex flex-row justify-between items-center cursor-pointer"
                                onClick={() => onToggle(index)}
                            >
                                <h3 className="text-[24px] md:text-[32px]">
                                    {item.title}
                                </h3>
                                <div
                                    className={`${openFaqIndex === index ? 'bg-neutral-500' : 'bg-neutral-100'} w-[32px] h-[32px] shrink-0`}
                                ></div>
                            </div>

                            <div
                                className={`grid transition-all duration-200 ease-in-out ${openFaqIndex === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
                            >
                                <p className="text-[18px] md:text-[24px] overflow-hidden">
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-8 md:gap-16 items-center w-full h-fit px-2.5 py-10 md:p-32">
                <h2>Testimonials</h2>

                <div className="flex flex-row justify-center items-center gap-2 w-full">
                    <button
                        onClick={handlePrev}
                        aria-label="Previous Testimonial"
                        className="text-neutral-500 text-[32px] shrink-0"
                    >
                        &#8592;
                    </button>

                    <div className="flex flex-col items-center justify-center p-2 md:p-8 text-neutral-500 text-[24px] w-full max-w-[600px] min-h-[400px] overflow-hidden text-center">
                        {testimonialContent[currentIndex]}
                    </div>

                    <button
                        onClick={handleNext}
                        aria-label="Next Testimonial"
                        className="text-neutral-500 text-[32px] shrink-0"
                    >
                        &#8594;
                    </button>
                </div>
            </div>
        </div>
    )
}
