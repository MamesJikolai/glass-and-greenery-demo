import { apiClient } from './api'

export const apiService = {
    getProducts: async () => {
        try {
            const response = await apiClient.get('products/')
            return response.data
        } catch (err) {
            console.error(`Error fetching products:`, err)
            throw err
        }
    },

    getAllWorkshops: async () => {
        try {
            const response = await apiClient.get('workshops/')
            return response.data
        } catch (err) {
            console.error('Error fetching workshops:', err)
            throw err
        }
    },

    getWorkshopsByDate: async (dateString: string) => {
        try {
            const response = await apiClient.get(
                `workshops/?date=${dateString}`
            )
            return response.data
        } catch (err) {
            console.error(
                `Error fetching workshops for date ${dateString}:`,
                err
            )
            throw err
        }
    },
}
