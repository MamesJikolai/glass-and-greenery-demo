import type { Cart, Order, OrderItem, Product } from '../types/models'
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

    const addToCart = (productId: number) => {
        const productToAdd = productList.find(
            (product) => product.id === productId
        )
        if (!productToAdd) return

        const shoppingCart: Cart[] = JSON.parse(
            localStorage.getItem('cart') || '[]'
        )
        const existingIndex = shoppingCart.findIndex(
            (cartItem) =>
                'product' in cartItem.item &&
                cartItem.item.product.id === productId
        )

        if (existingIndex > -1) {
            const cartItem = shoppingCart[existingIndex].item as OrderItem
            cartItem.quantity += 1
        } else {
            const newCartItem: Cart = {
                item: {
                    id: Date.now(),
                    product: productToAdd,
                    quantity: 1,
                    order: {} as Order,
                },
            }
            shoppingCart.push(newCartItem)
        }

        localStorage.setItem('cart', JSON.stringify(shoppingCart))
        window.dispatchEvent(new Event('cartUpdated'))
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
                        onClick={() => addToCart(product.id)}
                        className="w-full rounded-none!"
                    />
                </div>
            ))}
        </div>
    )
}
