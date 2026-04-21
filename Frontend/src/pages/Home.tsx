import { useState } from "react";
import ButtonAccent from "../components/ButtonAccent";
import Banner from "../components/Banner";

export default function Home() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const experienceContent = [
        {
            title: "DIY Terrarium Kits",
            description:
                "Everything you need to build your own miniature ecosystem at home. Perfect for gifting, unwinding, or discovering a new creative ritual.",
            button: "Shop DIY Kits",
        },
        {
            title: "Guided Workshops",
            description:
                "Join intimate, hands-on sessions in the city. Learn the art of terrarium building in a calm, welcoming space.",
            button: "Book a DIY Workshop",
        },
    ];

    const faqContent = [
        {
            title: "I've never kept a plant alive. Are these kits beginner-friendly?",
            content:
                'Absolutely. We\'ve designed our ecosystems to be "self-sustaining," meaning they require very little intervention. Each kit comes with a detailed Step-by-Step Ritual Guide that walks you through the build and the long-term care. Think of it as nature on autopilot.',
        },
        {
            title: 'What makes your "Artisan Glass" different from a standard jar?',
            content:
                "Most mass-produced glass contains ripples or a green tint that distorts your view. Our vessels are hand-blown by independent glassmakers using high-clarity flint glass. They are thicker, clearer, and designed with specific shapes to maintain the perfect humidity levels for your moss to thrive.",
        },
    ];

    const onToggle = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

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
                    {faqContent.map((item, index) => (
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
                                    className={`${openFaqIndex === index ? "bg-neutral-500" : "bg-neutral-100"} w-[32px] h-[32px]`}
                                ></div>
                            </div>

                            <div
                                className={`grid transition-all duration-200 ease-in-out ${openFaqIndex === index ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"}`}
                            >
                                <p className="text-[18px] md:text-[24px] overflow-hidden">
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-8 md:gap-16 w-full h-fit px-2.5 py-10 md:p-32"></div>
        </div>
    );
}
