import { backendInstance } from "./backendInstance";

export const sendOrderRequest = async (formData) => {
    const response = await backendInstance.post('/order/send', formData)
    return response
}