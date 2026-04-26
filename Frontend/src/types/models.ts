export interface FaqItem {
    title: string
    content: string
}

export interface FaqCategory {
    title: string
    content: FaqItem[]
}

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

export interface Schedule {
    id: number
    date: string
    start_time: string
    end_time: string
    capacity: number
}

export interface Workshop {
    id: number
    name: string
    description: string
    price: number
    schedules: Schedule[]
}

export interface Order {
    id: number
    name: string
    email: string
    total_amount: number
    is_paid: boolean
    created_at: string
}

export interface OrderItem {
    id: number
    order: Order
    product: Product
    quantity: number
}

export interface Booking {
    id: number
    order: Order
    schedule: Schedule
    seats_reserved: number
}

export interface Cart {
    item: OrderItem | Booking
}

export interface Newsletter {
    id: number
    email: string
    date_subscribed: string
}
