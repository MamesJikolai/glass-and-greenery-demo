import FaqContent from '../components/FaqContent'
import PageWrapper from '../components/PageWrapper'

export default function DigiCareGuide() {
    return (
        <PageWrapper
            isLanding={false}
            title="Digital Care Guide"
            backgroundImage="img/digital-care-guide.jpg"
        >
            <>
                <section id="digital-care-guide" className="self-start">
                    <h2 className="font-bold">
                        Nurturing Your Miniature Forest
                    </h2>
                    <p>
                        You don't need a green thumb to cultivate life. Here is
                        everything you need to know to keep your terrarium
                        thriving.
                    </p>
                </section>

                <section>
                    <h3 className="font-medium">The Golden Rules of Care:</h3>

                    <ul>
                        <li>
                            <strong>Light:</strong> Think of the deep woods.
                            Your terrarium craves bright, indirect light—like
                            the dappled sunlight filtering through a forest
                            canopy. Keep it away from harsh, direct sunbeams,
                            which can bake the delicate moss inside the glass.
                        </li>
                        <li>
                            <strong>Watering:</strong> Less is almost always
                            more. A closed terrarium creates its own water
                            cycle. You will only need to give it a few gentle
                            sprays of filtered water every 2-3 months. If the
                            soil looks dark and condensation forms on the glass
                            in the morning, it has plenty of moisture.
                        </li>
                        <li>
                            <strong>Air:</strong> Open the lid of your terrarium
                            for a few hours once every two weeks to let it
                            breathe and prevent mold.
                        </li>
                    </ul>
                </section>

                <section id="faq">
                    <FaqContent />
                </section>
            </>
        </PageWrapper>
    )
}
