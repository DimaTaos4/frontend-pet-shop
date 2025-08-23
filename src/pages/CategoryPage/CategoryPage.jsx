import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './CategoryPage.module.css'
import ProductList from '../../shared/components/ProductList/ProductList'
import { useTheme } from '@emotion/react'
import SectionTitle from '../../shared/components/SectionTitle/SectionTitle'
import Loader from '../../shared/components/Loader/Loader'
const CategoryPage = () => {
    const { id } = useParams()
    const [category, setCategory] = useState(null)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchCategoryData = async () => {
            try {
                const response = await axios.get(`https://backend-pet-shop-h47s.onrender.com/categories/${id}`)
                setCategory(response.data.category)
                setProducts(response.data.data)
            } catch {
                setError('Categories loading errors')
            } finally {
                setLoading(false)
            }
        }

        fetchCategoryData()
    }, [id])

    const { colors } = useTheme()

    const style = {
        '--text-color-grey': colors.grey,
        '--text-color-black': colors.textColorBlack,
        '--font-color-blue': colors.fontColorBlue,
    }

    if (loading) return <Loader loading={loading} />
    if (error) return <p className={styles.error}>{error}</p>

    return (
        <div className={styles.categoryPage}>
            <SectionTitle>{category.title}</SectionTitle>
            <div className={styles.productsGrid} style={style}>
                <ProductList products={products} />
            </div>
        </div>
    )
}

export default CategoryPage