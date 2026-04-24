import { useState } from 'react'
import { faqContent } from '../assets/faq'
import FaqAccordion from './FaqAccordion'

export default function FaqContent() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

    const onToggle = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index)
    }

    return (
        <div className="flex flex-col gap-16">
            {faqContent.map((category, index) => (
                <div key={index} className="flex flex-col gap-4">
                    <h3 className="font-medium">{category.title}</h3>

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
