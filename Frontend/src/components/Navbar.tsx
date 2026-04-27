import { useNavigate } from 'react-router-dom'
import ButtonAccent from './ButtonAccent'
import { useEffect, useState } from 'react'
import type { Cart } from '../types/models'

export default function Navbar() {
    const navigate = useNavigate()
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState<Cart[]>([])
    const cartItemCount = cartItems.length

    const updateCart = () =>
        setCartItems(JSON.parse(localStorage.getItem('cart') || '[]'))

    useEffect(() => {
        updateCart()
        window.addEventListener('cartUpdated', updateCart)
        return () => window.removeEventListener('cartUpdated', updateCart)
    }, [])

    if (isCartOpen) console.log(cartItems)

    return (
        <>
            <div className="bg-brand-500 flex flex-row justify-between w-full h-fit p-2.5 md:px-8 md:py-4">
                <img
                    src="/logo/banner-no bg.png"
                    className="w-[170.25px] h-[56.25px] md:w-[225px] md:h-[75px] cursor-pointer"
                    onClick={() => navigate('/')}
                />

                <div className="flex flex-row items-center gap-3">
                    <ButtonAccent
                        children="Shop"
                        className="text-[14px] md:text-[16px] px-2! py-1! md:px-4! md:py-2! rounded-3xl"
                        onClick={() => navigate('/shop')}
                    />

                    <ButtonAccent
                        children="Workshop"
                        className="text-[14px] md:text-[16px] px-2! py-1! md:px-4! md:py-2! rounded-3xl"
                        onClick={() => navigate('/workshop')}
                    />

                    <button
                        onClick={() => setIsCartOpen((prev) => !prev)}
                        className="relative inline-flex items-center justify-center group cursor-pointer mr-2"
                    >
                        {/* The Icon */}
                        <span className="material-symbols-outlined text-[40px]! text-accent-500 group-hover:text-accent-600 transition-colors">
                            shopping_cart
                        </span>
                        {/* The Badge */}
                        <div className="absolute -top-1.5 -right-1.5 flex items-center justify-center w-5 h-5 bg-accent-500 group-hover:bg-accent-600 text-white text-[12px] font-bold rounded-full transition-colors">
                            {cartItemCount}
                        </div>
                    </button>
                </div>
            </div>

            {/* Dark Overlay/Backdrop */}
            {isCartOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 transition-opacity"
                    onClick={() => setIsCartOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Sliding Cart Drawer */}
            <div
                className={`fixed top-0 right-0 w-full md:w-[500px] h-screen bg-neutral-100 z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
                    isCartOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Cart Header */}
                <div className="flex justify-between items-center p-4">
                    <h3 className="mb-0!">Cart</h3>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="material-symbols-outlined self-start text-[32px]! text-rose-500 hover:text-rose-700 transition-colors cursor-pointer"
                    >
                        &times;
                    </button>
                </div>

                {/* Cart Body */}
                <div className="p-6 overflow-y-auto h-[calc(100vh-80px)]">
                    {cartItemCount === 0 ? (
                        <p className="">Your cart is empty.</p>
                    ) : (
                        <div className="flex flex-col gap-1">
                            {cartItems.map((cartEntry) => {
                                const { item } = cartEntry

                                if ('product' in item) {
                                    return <></>
                                }

                                if ('schedule' in item) {
                                    return <></>
                                }

                                return null // Fallback just in case
                            })}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
