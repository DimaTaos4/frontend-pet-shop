import { useEffect, useState } from 'react'
import getProductsApi from '../api/products-api'

const useProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await getProductsApi()
            if (data) setProducts(data)
            if (error) setError(error)
            setLoading(false)
        }
        fetchData()
    }, [])

    return { products, loading, error }
}

export default useProducts