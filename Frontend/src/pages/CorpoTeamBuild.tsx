import type React from 'react'
import ButtonAccent from '../components/ButtonAccent'
import { useState } from 'react'
import PageWrapper from '../components/PageWrapper'

export default function CorpoTeamBuild() {
    const [formData, setFormData] = useState({
        companyName: '',
        email: '',
        groupSize: '',
        idealDate: '',
        teamInfo: '',
    })

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target

        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleInquirySubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(formData)

        alert('Inquiry submitted! We will get back to you as soon as possible.')
    }
    return (
        <PageWrapper
            isLanding={false}
            title="Corporate Team Building"
            backgroundImage="img/corporate-team-building.jpg"
        >
            <>
                <section id="digital-care-guide" className="self-start">
                    <h2 className="font-bold">Cultivate Connection.</h2>
                    <p>
                        Swap the screens for soil with our private group plant
                        therapy sessions.
                    </p>
                </section>

                <section>
                    <h3 className="font-medium">The Experience:</h3>
                    <p>
                        Corporate bonding shouldn't feel like a chore. Our
                        private terrarium workshops offer a genuinely
                        restorative, hands-on experience that encourages
                        mindfulness, creativity, and organic conversation among
                        your team.
                    </p>
                    <br />
                    <p>
                        Led by our expert guides, your team will learn the
                        science and art of terrarium building in a relaxed,
                        low-pressure environment. Everyone leaves with a
                        beautiful, living piece of art for their desk—and a
                        refreshed state of mind.
                    </p>
                </section>

                <section>
                    <h3 className="font-medium">What We Offer:</h3>

                    <ul>
                        <li>Private studio booking for 10 to 30 people.</li>
                        <li>Dedicated expert instructors.</li>
                        <li>
                            All premium materials provided (artisan glass, rare
                            mosses, specialized tools).
                        </li>
                        <li>Options to cater local food and beverages.</li>
                        <li>
                            Mobile Workshops: Have a large team? We can bring
                            the forest to your office.
                        </li>
                    </ul>
                </section>

                <form
                    onSubmit={handleInquirySubmit}
                    className="flex flex-col gap-4 self-center items-center w-full md:w-[600px] p-8"
                >
                    <h3 className="font-medium">Inquiry</h3>

                    <label className="w-full">
                        <p className="mb-1">Company Name</p>
                        <input
                            type="text"
                            placeholder="Enter your company name"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            className="bg-neutral-100 text-neutral-500 border-2 border-neutral-400 focus:outline-brand-500 w-full px-4 py-2 rounded-3xl"
                        />
                    </label>

                    <label className="w-full">
                        <p className="mb-1">Email Address</p>
                        <input
                            type="email"
                            placeholder="Enter your company email address"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="bg-neutral-100 text-neutral-500 border-2 border-neutral-400 focus:outline-brand-500 w-full px-4 py-2 rounded-3xl"
                        />
                    </label>

                    <label className="w-full">
                        <p className="mb-1">Estimated Group Size</p>
                        <input
                            type="number"
                            placeholder="Enter your group size"
                            min={10}
                            max={30}
                            name="groupSize"
                            value={formData.groupSize}
                            onChange={handleInputChange}
                            className="bg-neutral-100 text-neutral-500 border-2 border-neutral-400 focus:outline-brand-500 w-full px-4 py-2 rounded-3xl"
                        />
                    </label>

                    <label className="w-full">
                        <p className="mb-1">Ideal Date</p>
                        <input
                            type="date"
                            name="idealDate"
                            value={formData.idealDate}
                            onChange={handleInputChange}
                            className="bg-neutral-100 text-neutral-500 border-2 border-neutral-400 focus:outline-brand-500 w-full px-4 py-2 rounded-3xl"
                        />
                    </label>

                    <label className="w-full">
                        <p className="mb-1">Tell us a bit about your team!</p>
                        <textarea
                            name="teamInfo"
                            value={formData.teamInfo}
                            onChange={handleInputChange}
                            className="bg-neutral-100 text-neutral-500 border-2 border-neutral-400 focus:outline-brand-500 w-full px-4 py-2 rounded-3xl"
                            rows={5}
                        />
                    </label>

                    <ButtonAccent children="Submit" className="w-full" />
                </form>
            </>
        </PageWrapper>
    )
}
