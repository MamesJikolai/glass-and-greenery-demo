import type { Cart, Schedule, Workshop } from '../types/models'

interface CartItemScheduleProps {
    cartEntry: Cart
    schedule: Schedule
    workshop: Workshop
    onAdd: () => void
    onSubtract: () => void
}

export default function CartItemSchedule({
    cartEntry,
    schedule,
    workshop,
    onAdd,
    onSubtract,
}: CartItemScheduleProps) {
    return (
        <div key={cartEntry.id} className="mb-4">
            <div>
                <p className="text-[16px]">{workshop.name}</p>
                <p className="text-[12px]">
                    {schedule.date} at {schedule.start_time.substring(0, 5)}
                </p>
            </div>
            <div className="flex flex-row justify-between shrink-0">
                <p className="text-[16px]">${workshop.price}</p>
                <div className="flex flex-row">
                    <button onClick={onSubtract} className="px-2">
                        -
                    </button>
                    <p className="text-[16px] border border-neutral-500 px-6">
                        {cartEntry.quantity}
                    </p>
                    <button onClick={onAdd} className="px-2">
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}
