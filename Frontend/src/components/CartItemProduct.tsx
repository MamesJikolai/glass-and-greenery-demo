import type { Cart, Product } from '../types/models'

interface CartItemProductProps {
    cartEntry: Cart
    product: Product
    onAdd: () => void
    onSubtract: () => void
}

export default function CartItemProduct({
    cartEntry,
    product,
    onAdd,
    onSubtract,
}: CartItemProductProps) {
    return (
        <div key={cartEntry.id} className="flex gap-4 mb-4">
            <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-cover"
            />
            <div className="flex flex-col grow">
                <p className="flex-1 text-[16px]">{product.name}</p>
                <div className="flex flex-row justify-between shrink-0">
                    <p className="text-[16px]">${product.price}</p>
                    <div className="flex flex-row">
                        <button onClick={onSubtract} className="px-2">
                            -
                        </button>
                        <p className="text-[16px] border border-neutral-500 px-6">
                            {cartEntry.quantity}
                        </p>
                        <button onClick={onAdd} className="px-2">
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
