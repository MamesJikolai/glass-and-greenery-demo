import Banner from '../components/Banner'
import ShopCards from '../components/ShopCards'
import type { Product } from '../types/models'

export default function Shop() {
    const productList: Product[] = [
        // TERRARIUMS
        {
            id: 1,
            name: 'The Classic',
            description:
                'A balanced starter terrarium kit with glass vessel, soil, and easy-care plants.',
            category: 'terrarium',
            price: 79.99,
            quantity: 20,
            image: '/img/product.jpg',
            is_active: true,
        },
        {
            id: 2,
            name: 'Forest Dome',
            description:
                'A dome-shaped terrarium designed to mimic a lush miniature forest ecosystem.',
            category: 'terrarium',
            price: 89.99,
            quantity: 15,
            image: '/img/product.jpg',
            is_active: false, // Inactive
        },
        {
            id: 3,
            name: 'Desert Sphere',
            description:
                'A dry terrarium featuring succulents and sand layers for a desert aesthetic.',
            category: 'terrarium',
            price: 69.99,
            quantity: 18,
            image: '/img/product.jpg',
            is_active: true,
        },
        {
            id: 4,
            name: 'Hanging Orb',
            description:
                'A suspended glass orb terrarium perfect for small spaces and modern decor.',
            category: 'terrarium',
            price: 59.99,
            quantity: 25,
            image: '/img/product.jpg',
            is_active: true,
        },
        {
            id: 5,
            name: 'Mini Jungle Kit',
            description:
                'Create a dense mini jungle with tropical plants and layered substrate.',
            category: 'terrarium',
            price: 99.99,
            quantity: 0,
            image: '/img/product.jpg',
            is_active: false, // Inactive (Out of stock scenario)
        },
        {
            id: 6,
            name: 'Zen Garden Terrarium',
            description:
                'A calming terrarium with stones, moss, and minimalist design elements.',
            category: 'terrarium',
            price: 74.99,
            quantity: 12,
            image: '/img/product.jpg',
            is_active: true,
        },
        {
            id: 7,
            name: 'Eco Sphere',
            description:
                'Self-sustaining closed terrarium ecosystem with humidity control.',
            category: 'terrarium',
            price: 119.99,
            quantity: 6,
            image: '/img/product.jpg',
            is_active: true,
        },

        // RARE MOSS
        {
            id: 8,
            name: 'Emerald Carpet Moss',
            description:
                'Soft, dense moss with a vibrant green hue, ideal for terrariums.',
            category: 'rare_moss',
            price: 29.99,
            quantity: 40,
            image: '/img/product.jpg',
            is_active: true,
        },
        {
            id: 9,
            name: 'Velvet Cushion Moss',
            description:
                'A plush moss variety that forms thick cushions over surfaces.',
            category: 'rare_moss',
            price: 34.99,
            quantity: 18,
            image: '/img/product.jpg',
            is_active: false, // Inactive
        },
        {
            id: 10,
            name: 'Golden Thread Moss',
            description:
                'Fine-textured moss with subtle golden strands for visual contrast.',
            category: 'rare_moss',
            price: 39.99,
            quantity: 15,
            image: '/img/product.jpg',
            is_active: true,
        },
        {
            id: 11,
            name: 'Feather Moss Deluxe',
            description:
                'Elegant feather-like moss that adds height and texture.',
            category: 'rare_moss',
            price: 27.99,
            quantity: 22,
            image: '/img/product.jpg',
            is_active: true,
        },
        {
            id: 12,
            name: 'Silver Tip Moss',
            description:
                'Unique moss with silvery tips that shimmer under light.',
            category: 'rare_moss',
            price: 44.99,
            quantity: 10,
            image: '/img/product.jpg',
            is_active: false, // Inactive
        },
        {
            id: 13,
            name: 'Starburst Moss',
            description:
                'Radiating growth pattern resembling a starburst formation.',
            category: 'rare_moss',
            price: 31.99,
            quantity: 16,
            image: '/img/product.jpg',
            is_active: true,
        },
        {
            id: 14,
            name: 'Deep Forest Moss',
            description: 'Dark green moss inspired by dense forest floors.',
            category: 'rare_moss',
            price: 28.99,
            quantity: 5,
            image: '/img/product.jpg',
            is_active: true,
        },
    ]

    return (
        <div className="flex flex-col w-full">
            <Banner
                isLanding={false}
                title="Shop All"
                backgroundImage="/img/shop.jpg"
            />

            <div className="flex flex-col gap-2 md:gap-4 w-full h-fit px-2.5 py-10 md:p-32">
                <h2>Terrariums</h2>

                <ShopCards productList={productList} category="terrarium" />
            </div>

            <div className="flex flex-col gap-8 md:gap-16 w-full h-fit px-2.5 py-10 md:p-32">
                <h2>Rare Moss Collections</h2>

                <ShopCards productList={productList} category="rare_moss" />
            </div>
        </div>
    )
}
