import type { FaqItem } from '../types/models'

interface FaqAccordionProps {
    faqContent: FaqItem[]
    openFaqIndex: number | null
    onToggle: (index: number) => void
}

export default function FaqAccordion({
    faqContent,
    openFaqIndex,
    onToggle,
}: FaqAccordionProps) {
    return (
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
                        <button className="material-symbols-outlined text-[40px]!">
                            {openFaqIndex === index
                                ? 'collapse_all'
                                : 'expand_all'}
                        </button>
                    </div>

                    <div
                        className={`grid transition-all duration-200 ease-in-out ${openFaqIndex === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
                    >
                        <p className="text-[18px] md:text-[24px] overflow-hidden">
                            {item.content}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}
