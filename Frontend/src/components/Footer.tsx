import ButtonAccent from "./ButtonAccent";

export default function Footer() {
    const footerLinks = [
        {
            title: "Shop & Book",
            links: [
                { name: "DIY Terrarium Kits", link: "" },
                { name: "Workshop Calendar", link: "" },
                { name: "Rare Moss Collection", link: "" },
                { name: "Digital Gift Cards", link: "" },
            ],
        },
        {
            title: "Support",
            links: [
                { name: "Digital Care Guide", link: "" },
                { name: "FAQ", link: "" },
            ],
        },
        {
            title: "The Studio",
            links: [
                { name: "Our Story", link: "" },
                { name: "Sustainability Ethics", link: "" },
                { name: "Corporate Team Building", link: "" },
                { name: "Contact Us", link: "" },
            ],
        },
    ];

    return (
        <div className="bg-brand-500 text-neutral-100 flex flex-col wrap gap-8 md:gap-16 w-full h-fit mmd:h-[840px] px-2.5 py-10 md:p-32">
            <div className="flex flex-row flex-wrap justify-between gap-8">
                {footerLinks.map((section, sectionId) => (
                    <div key={sectionId}>
                        <h3>{section.title}</h3>
                        <ul>
                            {section.links.map((link, linkId) => (
                                <li key={linkId} className="mt-4">
                                    <a href={link.link}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-4 md:gap-6 self-center max-w-[600px] w-full">
                <h3 className="text-[24px] md:text-[32px]">
                    Sign Up to our Newsletter
                </h3>
                <form className="flex flex-row justify-center items-center gap-4 md:gap-8">
                    <input
                        type="email"
                        placeholder="Enter your email..."
                        className="bg-neutral-100 text-neutral-500 placeholder-neutral-400 px-4 py-1 md:px-8 md:py-4 flex-1 rounded-4xl"
                    />
                    <ButtonAccent children="Sign Up" />
                </form>
            </div>

            <div className="flex flex-row gap-4 md:gap-16 self-center">
                <div className="w-16 h-16 bg-neutral-50"></div>
                <div className="w-16 h-16 bg-neutral-50"></div>
                <div className="w-16 h-16 bg-neutral-50"></div>
                <div className="w-16 h-16 bg-neutral-50"></div>
            </div>

            <p className="text-center self-center">
                © 2026 Glass & Greenery. All rights reserved.
                <br />
                Privacy Policy | Terms of Service | Refund Policy
            </p>
        </div>
    );
}
