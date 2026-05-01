import { useEffect, useState } from 'react'
import type { Cart, Product, Workshop } from '../types/models'
import ButtonAccent from './ButtonAccent'
import CartShopItem from './CartShopItem'
import { apiService } from '../services/userService'

interface CartDrawerProps {
    isCartOpen: boolean
    setIsCartOpen: (open: boolean) => void
    cartItems: Cart[]
}

export default function CartDrawer({
    isCartOpen,
    setIsCartOpen,
    cartItems,
}: CartDrawerProps) {
    const [products, setProducts] = useState<Product[]>([])
    const [workshops, setWorkshops] = useState<Workshop[]>([])

    useEffect(() => {
        ;(async () => {
            try {
                const prouctData = await apiService.getProducts()
                const scheduleData = await apiService.getAllWorkshops()
                setProducts(prouctData)
                setWorkshops(scheduleData)
            } catch (err) {
                console.error('Failed to load products for cart', err)
            }
        })()
    }, [])

    const getTotalPrice = () => {
        return cartItems.reduce((total, cartEntry) => {
            if (cartEntry.type === 'product') {
                const product = products.find((p) => p.id === cartEntry.id)
                if (product) return total + product.price * cartEntry.quantity
            }

            if (cartEntry.type === 'schedule') {
                for (const workshop of workshops) {
                    const hasSchedule = workshop.schedules.some(
                        (s) => s.id === cartEntry.id
                    )
                    if (hasSchedule) {
                        return total + workshop.price * cartEntry.quantity
                    }
                }
            }
            return total
        }, 0)
    }

    return (
        <div
            className={` flex flex-col overflow-hidden fixed top-0 right-0 w-full md:w-[500px] h-screen bg-neutral-100 z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
                isCartOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            {/* Cart Header */}
            <div className="flex justify-between items-center p-8 shrink-0">
                <h3 className="mb-0!">Cart</h3>
                <button
                    onClick={() => setIsCartOpen(false)}
                    className="material-symbols-outlined self-start text-[32px]! text-rose-500 hover:text-rose-700 transition-colors cursor-pointer"
                >
                    &times;
                </button>
            </div>

            {/* Cart Body */}
            <div className="px-8 py-0 overflow-y-auto grow">
                {cartItems.length === 0 ? (
                    <p className="">Your cart is empty.</p>
                ) : (
                    <CartShopItem
                        products={products}
                        workshops={workshops}
                        cartItems={cartItems}
                    />
                )}
            </div>

            {/* Cart Footer */}
            <div className="flex justify-between items-center p-8 shrink-0">
                <p>Total ${getTotalPrice().toFixed(2)}</p>
                <ButtonAccent children="Checkout" className="rounded-none!" />
            </div>
        </div>
    )
}
