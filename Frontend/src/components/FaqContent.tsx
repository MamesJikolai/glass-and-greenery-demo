import { useState } from 'react'
import { faqContent } from '../assets/faq'
import FaqAccordion from './FaqAccordion'

export default function FaqContent() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

    const onToggle = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index)
    }

    return (
        <div className="flex flex-col gap-8">
            {faqContent.map((category, index) => (
                <div key={index}>
                    <h2>{category.title}</h2>

                    <FaqAccordion
                        faqContent={category.content}
                        onToggle={onToggle}
                        openFaqIndex={openFaqIndex}
                    />
                </div>
            ))}
        </div>
    )
}
