import { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import ShopCards from '../components/ShopCards'
import type { Product } from '../types/models'
import { apiService } from '../services/userService'
import Spinner from '../components/Spinner'
import PageWrapper from '../components/PageWrapper'

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

    if (error) {
        return (
            <PageWrapper
                isLanding={false}
                title="Shop All"
                backgroundImage="/img/shop.jpg"
            >
                <p className="text-rose-500">{error}</p>
            </PageWrapper>
        )
    }

    if (isLoading) {
        return (
            <PageWrapper
                isLanding={false}
                title="Shop All"
                backgroundImage="/img/shop.jpg"
            >
                <Spinner />
            </PageWrapper>
        )
    }

    return (
        <PageWrapper
            isLanding={false}
            title="Shop All"
            backgroundImage="/img/shop.jpg"
        >
            <>
                <section
                    id="terrarium"
                    className="flex flex-col gap-2 md:gap-4 w-full h-fit"
                >
                    <h2>Terrariums</h2>
                    <ShopCards productList={products} category="terrarium" />
                </section>

                <section
                    id="rare-moss"
                    className="flex flex-col gap-2 md:gap-4 w-full h-fit"
                >
                    <h2>Rare Moss Collections</h2>
                    <ShopCards productList={products} category="rare_moss" />
                </section>
            </>
        </PageWrapper>
    )
}
