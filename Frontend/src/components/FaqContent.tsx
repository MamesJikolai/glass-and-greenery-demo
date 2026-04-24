import { useState } from 'react'
import { faqContent } from '../assets/faq'
import FaqAccordion from './FaqAccordion'

export default function FaqContent() {
    const [openFaqId, setOpenFaqId] = useState<string | null>(null)

    const onToggle = (id: string) => {
        setOpenFaqId(openFaqId === id ? null : id)
    }

    return (
        <div className="flex flex-col gap-16">
            {faqContent.map((category, index) => (
                <div key={index} className="flex flex-col gap-4">
                    <h3 className="font-medium">{category.title}</h3>

                    <FaqAccordion
                        faqContent={category.content}
                        categoryIndex={index}
                        openFaqId={openFaqId}
                        onToggle={onToggle}
                    />
                </div>
            ))}
        </div>
    )
}
