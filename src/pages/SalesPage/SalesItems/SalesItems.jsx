import styles from './SalesItems.module.css'
import ProductList from '../../../shared/components/ProductList/ProductList'
import { useTheme } from '@emotion/react'
import useProducts from '../../../shared/hooks/useProducts'

const SalesItems = ({ limit }) => {
    const { products, loading, error } = useProducts()
    const salesProducts = products.filter(product => product.discont_price !== null)
    const { colors } = useTheme()

    const style = {
        '--text-color-grey': colors.grey,
        '--text-color-black': colors.textColorBlack,
        '--font-color-blue': colors.fontColorBlue,
    }

    if (loading) return <p>Loading discounted products...</p>
    if (error) return <p>Failed to load products.</p>

    const limitedSales = limit ? salesProducts.slice(0, limit) : salesProducts

    return (
        <section className={styles.salesConteiner} style={style}>
            <ProductList products={limitedSales} />
        </section>
    )
}
export default SalesItems