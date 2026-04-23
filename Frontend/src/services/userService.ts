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
}
