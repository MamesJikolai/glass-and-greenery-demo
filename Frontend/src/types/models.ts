export interface Product {
    id: number
    name: string
    description: string
    category: 'terrarium' | 'rare_moss'
    price: number
    quantity: number
    image: string
    is_active: boolean
}

export interface Workshop {
    id: number
    name: string
    description: string
    price: number
    date: string
    start_time: string
    capacity: number
}
