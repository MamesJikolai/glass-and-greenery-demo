import type { Cart, Product, Schedule, Workshop } from '../types/models'
import CartItemProduct from './CartItemProduct'
import CartItemSchedule from './CartItemSchedule'

interface CartShopItemProps {
    products: Product[]
    workshops: Workshop[]
    cartItems: Cart[]
}

export default function CartShopItem({
    products,
    workshops,
    cartItems,
}: CartShopItemProps) {
    const cartProductItems = cartItems.filter((item) => item.type === 'product')
    const cartScheduleItems = cartItems.filter(
        (item) => item.type === 'schedule'
    )

    return (
        <div className="flex flex-col gap-8">
            <section>
                <p className="font-medium mb-4">Terrariums/Rare Moss</p>
                {cartProductItems.map((cartEntry) => {
                    const product = products.find((p) => p.id === cartEntry.id)
                    if (!product) return null
                    return (
                        <>
                            <CartItemProduct
                                key={cartEntry.id}
                                cartEntry={cartEntry}
                                product={product}
                            />
                        </>
                    )
                })}
            </section>

            <section>
                <p className="font-medium mb-4">Workshops</p>
                {cartScheduleItems.map((cartEntry) => {
                    let foundSchedule: Schedule | undefined
                    let parentWorkshop: Workshop | undefined

                    for (const workshop of workshops) {
                        const schedule = workshop.schedules.find(
                            (s) => s.id === cartEntry.id
                        )
                        if (schedule) {
                            foundSchedule = schedule
                            parentWorkshop = workshop
                            break
                        }
                    }
                    if (!foundSchedule || !parentWorkshop) return null
                    return (
                        <CartItemSchedule
                            key={`sched-${cartEntry.id}`}
                            cartEntry={cartEntry}
                            schedule={foundSchedule}
                            workshop={parentWorkshop}
                        />
                    )
                })}
            </section>
        </div>
    )
}
