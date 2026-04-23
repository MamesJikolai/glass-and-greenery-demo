import type { Product } from '../types/models'
import ButtonAccent from './ButtonAccent'

interface ShopCardsProps {
    productList: Product[]
    category: 'terrarium' | 'rare_moss'
}

export default function ShopCards({ productList, category }: ShopCardsProps) {
    const filteredProducts = productList.filter(
        (product) => product.category === category && product.is_active
    )

    if (filteredProducts.length === 0) {
        return (
            <p>
                No available{' '}
                {category === 'terrarium' ? 'Terrariums' : 'Rare Moss'}
            </p>
        )
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12 w-full">
            {filteredProducts.map((product) => (
                <div
                    key={product.id}
                    className="flex flex-col gap-2 w-full h-full"
                >
                    <img
                        src={product.image}
                        className="w-full aspect-square object-cover"
                    />
                    <h3>{product.name}</h3>

                    <div className="flex justify-between items-center mt-auto">
                        <p>{product.price}</p>
                        <p>Stock: {product.quantity}</p>
                    </div>
                    <ButtonAccent
                        children="Add to Cart"
                        className="w-full rounded-none!"
                    />
                </div>
            ))}
        </div>
    )
}
