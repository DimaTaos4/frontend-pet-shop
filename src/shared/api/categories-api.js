import { backendInstance } from "./backendInstance";
import requestDecorator from "./requestDecorator";
const getCategories = requestDecorator(async () => {
    const { data } = await backendInstance.get('/categories/all')
    return data
})
export default getCategories