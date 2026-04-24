import { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import { apiService } from '../services/userService'
import Spinner from '../components/Spinner'
import Calendar from 'react-calendar'
import ButtonAccent from '../components/ButtonAccent'

export default function Workshop() {
    // State for the selected calendar date
    const [selectedDate, setSelectedDate] = useState<Date>(new Date())
    // State for days that have workshops (fetched on mount)
    const [daysWithWorkshops, setDaysWithWorkshops] = useState<Date[]>([])
    // State for the specific time slots of the selected date
    const [dailySchedules, setDailySchedules] = useState<any[]>([])
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isLoadingSchedule, setIsLoadingSchedule] = useState(false)

    useEffect(() => {
        const fetchWorkshops = async () => {
            try {
                setError(null)
                setIsLoading(true)

                const data = await apiService.getAllWorkshops()
                const availableDates = data.map((ws: any) => new Date(ws.date))
                setDaysWithWorkshops(availableDates)
            } catch (err) {
                setError('Failed to load workshops. Please try again later.')
            } finally {
                setIsLoading(false)
            }
        }

        fetchWorkshops()
    }, [])

    useEffect(() => {
        const formattedDate = selectedDate.toISOString().split('T')[0]

        const fetchWorkshopDay = async () => {
            try {
                setError(null)
                setIsLoadingSchedule(true)

                const data = await apiService.getWorkshopsByDate(formattedDate)
                setDailySchedules(data)
            } catch (err) {
                setError('Failed to load daily schedules')
            } finally {
                setIsLoadingSchedule(false)
            }
        }

        fetchWorkshopDay()
    }, [selectedDate])

    const tileClassName = ({ date, view }: { date: Date; view: string }) => {
        if (view === 'month') {
            // If the date exists in our array of available dates, give it a special class
            const hasWorkshop = daysWithWorkshops.find(
                (d) => d.toDateString() === date.toDateString()
            )
            if (hasWorkshop) {
                return 'has-workshop-day' // Define this in your CSS (e.g., green circle)
            }
        }
        return null
    }

    return (
        <div className="flex flex-col w-full">
            <Banner
                isLanding={false}
                title="Workshop"
                backgroundImage="/img/workshop.jpg"
            />

            <div className="flex flex-col gap-8 md:gap-16 items-center w-full h-fit px-2.5 py-10 md:p-32">
                {isLoading ? (
                    <Spinner />
                ) : (
                    <>
                        <h2>Schedule Your Workshop</h2>

                        <div className="flex flex-col gap-6 w-full max-w-md border-2 border-brand-500 rounded-xl p-6">
                            <Calendar
                                onChange={(value) =>
                                    setSelectedDate(value as Date)
                                }
                                value={selectedDate}
                                defaultView="month"
                                tileClassName={tileClassName}
                                next2Label={null}
                                prev2Label={null}
                            />

                            {isLoadingSchedule ? (
                                <Spinner />
                            ) : (
                                <div className="flex flex-col gap-6">
                                    <p>
                                        Schedules for{' '}
                                        {selectedDate.toLocaleDateString()}
                                    </p>

                                    <div></div>

                                    <ButtonAccent
                                        children="Add to Cart"
                                        className="w-full rounded-lg!"
                                    />
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
