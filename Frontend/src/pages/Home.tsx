import { useState } from 'react'
import ButtonAccent from '../components/ButtonAccent'
import Banner from '../components/Banner'
import { faqContent } from '../assets/faq'
import { experienceContent } from '../assets/experience'
import { testimonialContent } from '../assets/testimonial'
import { useNavigate } from 'react-router-dom'
import FaqAccordion from '../components/FaqAccordion'

export default function Home() {
    const navigate = useNavigate()
    const [openFaqIndex, setOpenFaqIndex] = useState<string | null>(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    const onToggle = (index: number) => {
        setOpenFaqIndex(
            openFaqIndex === index.toString() ? null : index.toString()
        )
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

            <div className="flex flex-col gap-4 md:gap-18 text-center bg-brand-500 text-neutral-100 w-full h-fit px-2.5 py-10 md:p-16">
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

                <div className="flex flex-row flex-wrap gap-8 md:gap-16 justify-center text-neutral-100">
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
                                onClick={() => navigate(item.to)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-8 md:gap-16 items-center bg-brand-500 text-neutral-100 w-full h-fit px-2.5 py-10 md:p-32">
                <h2>FAQ</h2>

                <FaqAccordion
                    faqContent={faqContent[0].content.slice(0, 3)}
                    onToggle={() => onToggle}
                    openFaqId={openFaqIndex}
                />
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
