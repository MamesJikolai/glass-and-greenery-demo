import PageWrapper from '../components/PageWrapper'

export default function OurStory() {
    return (
        <PageWrapper
            isLanding={false}
            title="Our Story"
            backgroundImage="img/our-story.jpg"
        >
            <>
                <section id="digital-care-guide" className="self-start">
                    <h2 className="font-bold">Rooted in Intention.</h2>
                    <p>
                        Bringing a moment of stillness to a fast-moving world.
                    </p>
                </section>

                <section>
                    <h3 className="font-medium">Our Story:</h3>
                    <p>
                        Glass & Greenery wasn't born in a greenhouse; it was
                        born in a tiny, chaotic city apartment. Surrounded by
                        concrete and the constant glow of screens, we realized
                        we were profoundly disconnected from the natural world.
                        We didn't just need decorations; we needed a ritual. We
                        needed to put our hands in the soil.
                    </p>
                    <br />
                    <p>
                        What started as a personal practice of building
                        miniature, self-sustaining ecosystems quickly grew into
                        a mission. We wanted to capture the quiet, restorative
                        feeling of a walk through the Pacific Northwest woods
                        and make it accessible to anyone—even those who have
                        never kept a plant alive.
                    </p>
                    <br />
                    <p>
                        We are your knowledgeable guides, not gatekeepers.
                        Whether you are building a kit at your kitchen table or
                        joining us in the studio, our goal is to help you slow
                        down, create with intention, and cultivate a little
                        piece of the wild.
                    </p>
                </section>

                <section>
                    <h3 className="font-medium">
                        Our Commitment to the Earth:
                    </h3>

                    <p>
                        We believe that bringing nature indoors shouldn't harm
                        the outdoors.
                    </p>

                    <ul>
                        <li>
                            <strong>Ethical Sourcing:</strong> We never forage
                            from natural reserves. All of our living materials
                            are sustainably cultivated in controlled
                            environments.
                        </li>
                        <li>
                            <strong>Artisan Partnerships:</strong> We partner
                            exclusively with local glassblowers, supporting
                            traditional craftsmanship and reducing the carbon
                            footprint of overseas mass-manufacturing.
                        </li>
                        <li>
                            <strong>Zero-Plastic Packaging:</strong> From our
                            shipping tape to our soil bags, every element of our
                            packaging is fully compostable or infinitely
                            recyclable.
                        </li>
                    </ul>
                </section>
            </>
        </PageWrapper>
    )
}
