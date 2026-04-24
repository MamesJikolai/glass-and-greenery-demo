import type { FaqItem } from '../types/models'

interface FaqAccordionProps {
    faqContent: FaqItem[]
    categoryIndex?: number
    openFaqId: string | null
    onToggle: (id: string) => void
}

export default function FaqAccordion({
    faqContent,
    categoryIndex,
    openFaqId,
    onToggle,
}: FaqAccordionProps) {
    return (
        <div className="flex flex-col gap-8 w-full">
            {faqContent.map((item, index) => {
                const itemId = `${categoryIndex}-${index}`
                const isOpen = openFaqId === itemId

                return (
                    <div
                        key={index}
                        className="bg-surface-primary p-4 md:p-8 rounded-4xl"
                    >
                        <div
                            className="flex flex-row justify-between items-center cursor-pointer"
                            onClick={() => onToggle(itemId)}
                        >
                            <h3 className="text-[24px] md:text-[24px]">
                                {item.title}
                            </h3>
                            <button className="material-symbols-outlined text-[40px]!">
                                {isOpen ? 'collapse_all' : 'expand_all'}
                            </button>
                        </div>

                        <div
                            className={`grid transition-all duration-200 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
                        >
                            <p className="overflow-hidden">{item.content}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
