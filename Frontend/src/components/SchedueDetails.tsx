import { useState } from 'react'
import ButtonAccent from './ButtonAccent'
import Spinner from './Spinner'
import type { Schedule, Workshop } from '../types/models'

interface ScheduleDetailsProps {
    isLoadingSchedule: boolean
    scheduleError: string | null
    selectedDate: Date
    dailySchedules: Workshop[]
}

export default function ScheduleDetails({
    isLoadingSchedule,
    scheduleError,
    selectedDate,
    dailySchedules,
}: ScheduleDetailsProps) {
    const [selectedScheduleId, setSelectedScheduleId] = useState<number | null>(
        null
    )

    if (isLoadingSchedule) {
        return <Spinner />
    }

    if (scheduleError) {
        return <p className="text-rose-500">{scheduleError}</p>
    }

    if (dailySchedules.length === 0) {
        return (
            <div className="flex flex-col gap-6">
                <p>Schedules for {selectedDate.toLocaleDateString()}</p>
                <p>No timeslots available on this date.</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-6">
            <p>Schedules for {selectedDate.toLocaleDateString()}</p>

            {dailySchedules.map((workshop) => (
                <div key={workshop.id} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-[16px] font-medium">
                            {workshop.name}
                        </h3>
                        <p className="text-[14px]">{workshop.description}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-[14px] font-medium">
                            Select a time:
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {/* Map over the nested schedules for THIS workshop */}
                            {workshop.schedules.map((schedule: Schedule) => (
                                <button
                                    key={schedule.id}
                                    onClick={() =>
                                        setSelectedScheduleId(schedule.id)
                                    }
                                    className={`px-4 py-2 text-[14px] border rounded-md transition-all duration-400 ease-in-out ${
                                        selectedScheduleId === schedule.id
                                            ? 'bg-brand-500 text-white border-brand-500'
                                            : 'bg-transparent border-gray-300 hover:border-brand-500'
                                    }`}
                                >
                                    {schedule.start_time.substring(0, 5)}{' '}
                                    {selectedScheduleId === schedule.id &&
                                        schedule.capacity > 0 &&
                                        `(Slots left: ${schedule.capacity})`}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            ))}

            <ButtonAccent className="w-full rounded-lg!">
                Add to Cart
            </ButtonAccent>
        </div>
    )
}
