import { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import ShopCards from '../components/ShopCards'
import type { Product } from '../types/models'
import { apiService } from '../services/userService'
import Spinner from '../components/Spinner'

export default function Shop() {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setError(null)
                setIsLoading(true)

                const data = await apiService.getProducts()
                setProducts(data)
            } catch (err) {
                setError('Failed to load products. Please try again later.')
            } finally {
                setIsLoading(false)
            }
        }

        fetchProducts()
    }, [])

    return (
        <div className="flex flex-col w-full">
            <Banner
                isLanding={false}
                title="Shop All"
                backgroundImage="/img/shop.jpg"
            />

            <div className="flex flex-col gap-10 md:gap-32 w-full h-fit px-2.5 py-10 md:p-32">
                <div
                    id="terrarium"
                    className="flex flex-col gap-2 md:gap-4 w-full h-fit"
                >
                    <h2>Terrariums</h2>
                    <ShopCards productList={productList} category="terrarium" />
                </div>

                <div
                    id="rare-moss"
                    className="flex flex-col gap-2 md:gap-4 w-full h-fit"
                >
                    <h2>Rare Moss Collections</h2>
                    <ShopCards productList={productList} category="rare_moss" />
                </div>
            </div>
        </div>
    )
}
