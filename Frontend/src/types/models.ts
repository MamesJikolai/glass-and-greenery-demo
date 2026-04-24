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
