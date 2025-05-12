import { backendInstance } from "./backendInstance";

export const sendSaleRequest = async (formData) => {
    const response = await backendInstance.post('/sale/send', formData)
    return response
}