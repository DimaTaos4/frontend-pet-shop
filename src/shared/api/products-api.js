import { backendInstance } from "./backendInstance";
import requestDecorator from "./requestDecorator";
const getProductsApi = requestDecorator(async () => {
    const { data } = await backendInstance.get('/products/all')
    return data
})
export default getProductsApi