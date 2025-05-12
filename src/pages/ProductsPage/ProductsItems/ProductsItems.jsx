import styles from './ProductsItems.module.css'
import { useTheme } from '@emotion/react'
import ProductList from '../../../shared/components/ProductList/ProductList'
import useProducts from '../../../shared/hooks/useProducts'

const ProductsItems = () => {
    const { colors } = useTheme()
    const { products, loading, error } = useProducts()

    const style = {
        '--text-color-grey': colors.grey,
        '--text-color-black': colors.textColorBlack,
        '--font-color-blue': colors.fontColorBlue,
    }

    if (loading) return <p>Loading products...</p>
    if (error) return <p>Failed to load products.</p>

    return (
        <section className={styles.productItems} style={style}>
            <ProductList products={products} />
        </section>
    )
}
export default ProductsItems