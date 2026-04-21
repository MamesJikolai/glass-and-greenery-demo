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
      title: "About Us",
      links: [
        { name: "Our Story", link: "" },
        { name: "Sustainability Ethics", link: "" },
        { name: "Corporate Team Building", link: "" },
        { name: "Contact Us", link: "" },
      ],
    },
  ];

  return (
    <div className="bg-brand-500 text-neutral-50 flex flex-col wrap gap-[64px] w-full h-[840px] px-[10px] py-[40px] md:px-[128px] md:py-[128px]">
      <div className="flex flex-row justify-between gap-[32px]">
        {footerLinks.map((section, sectionId) => (
          <div key={sectionId}>
            <h3>{section.title}</h3>
            <ul>
              {section.links.map((link, linkId) => (
                <li key={linkId} className="mt-[16px]">
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-[24px] self-center">
        <h3>Sign Up to our Newsletter</h3>
        <form className="flex flex-row items-center gap-[32px]">
          <input
            type="email"
            placeholder="Enter your email..."
            className="bg-neutral-50 text-neutral-500 placeholder-neutral-400 w-[600px] px-[32px] py-[16px] rounded-[16px]"
          />
          <button className="bg-accent-500 hover:bg-accent-600 text-neutral-50 px-[16px] py-[8px] rounded-[16px] cursor-pointer">
            Sign Up
          </button>
        </form>
      </div>

      <div className="flex flex-row gap-[64px] self-center">
        <div className="w-[64px] h-[64px] bg-neutral-50"></div>
        <div className="w-[64px] h-[64px] bg-neutral-50"></div>
        <div className="w-[64px] h-[64px] bg-neutral-50"></div>
        <div className="w-[64px] h-[64px] bg-neutral-50"></div>
      </div>

      <p className="self-center">
        © 2026 Glass & Greenery. All rights reserved.
        <br />
        Privacy Policy | Terms of Service | Refund Policy
      </p>
    </div>
  );
}
