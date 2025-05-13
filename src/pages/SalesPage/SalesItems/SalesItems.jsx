import styles from './SalesItems.module.css'
import ProductList from '../../../shared/components/ProductList/ProductList'
import { useTheme } from '@emotion/react'
import useProducts from '../../../shared/hooks/useProducts'

const SalesItems = ({ filters = {}, limit }) => {
    const { colors } = useTheme()
    const { products, loading, error } = useProducts()

    const style = {
        '--text-color-grey': colors.grey,
        '--text-color-black': colors.textColorBlack,
        '--font-color-blue': colors.fontColorBlue,
    }

    if (loading) return <p>Loading discounted products...</p>
    if (error) return <p>Failed to load products.</p>

    // 1. Фильтрация по скидке
    const salesProducts = products.filter(product => product.discont_price !== null)

    // 2. Применяем фильтры по цене
    const filtered = salesProducts
        .filter(p => !filters.priceFrom || (p.discont_price || p.price) >= +filters.priceFrom)
        .filter(p => !filters.priceTo || (p.discont_price || p.price) <= +filters.priceTo)

    // 3. Сортировка
    if (filters.sort === 'price: low-high') {
        filtered.sort((a, b) => (a.discont_price || a.price) - (b.discont_price || b.price))
    }

    if (filters.sort === 'price: high-low') {
        filtered.sort((a, b) => (b.discont_price || b.price) - (a.discont_price || a.price))
    }

    if (filters.sort === 'newest') {
        filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    }

    // 4. Ограничение по количеству
    const limitedSales = limit ? filtered.slice(0, limit) : filtered

    return (
        <section className={styles.salesConteiner} style={style}>
            <ProductList products={limitedSales} />
        </section>
    )
}

export default SalesItems
