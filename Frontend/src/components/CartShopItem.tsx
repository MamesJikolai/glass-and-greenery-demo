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

    const updateStorageAndNotify = (newCart: Cart[]) => {
        localStorage.setItem('cart', JSON.stringify(newCart))
        window.dispatchEvent(new Event('cartUpdated'))
    }

    const addQuantity = (id: number | null, type: 'product' | 'schedule') => {
        const currentCart: Cart[] = JSON.parse(
            localStorage.getItem('cart') || '[]'
        )

        const updatedCart = currentCart.map((item) => {
            if (item.id === id && item.type === type) {
                if (type === 'product') {
                    const product = products.find((p) => p.id === id)

                    if (product && item.quantity >= product.quantity) {
                        return item
                    }
                } else if (type === 'schedule') {
                    let scheduleCapacity = 0

                    for (const workshop of workshops) {
                        const sched = workshop.schedules.find(
                            (s) => s.id === id
                        )
                        if (sched) {
                            scheduleCapacity = sched.capacity
                            break
                        }
                    }

                    if (item.quantity >= scheduleCapacity) {
                        return item
                    }
                }

                return { ...item, quantity: item.quantity + 1 }
            }

            return item
        })

        updateStorageAndNotify(updatedCart)
    }

    const subtractQuantity = (
        id: number | null,
        type: 'product' | 'schedule'
    ) => {
        const currentCart: Cart[] = JSON.parse(
            localStorage.getItem('cart') || '[]'
        )
        const updatedCart = currentCart
            .map((item) => {
                if (item.id === id && item.type === type) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item
            })
            .filter((item) => item.quantity > 0)

        updateStorageAndNotify(updatedCart)
    }

    return (
        <div className="flex flex-col gap-8">
            <section>
                <p className="font-medium mb-4">Terrariums/Rare Moss</p>
                {cartProductItems.map((cartEntry) => {
                    const product = products.find((p) => p.id === cartEntry.id)
                    if (!product) return null
                    return (
                        <CartItemProduct
                            key={cartEntry.id}
                            cartEntry={cartEntry}
                            product={product}
                            onAdd={() => addQuantity(cartEntry.id, 'product')}
                            onSubtract={() =>
                                subtractQuantity(cartEntry.id, 'product')
                            }
                        />
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
                            onAdd={() => addQuantity(cartEntry.id, 'schedule')}
                            onSubtract={() =>
                                subtractQuantity(cartEntry.id, 'schedule')
                            }
                        />
                    )
                })}
            </section>
        </div>
    )
}
