import styles from './SalesItems.module.css'
import ProductList from '../../../shared/components/ProductList/ProductList'
import { useTheme } from '@emotion/react'
import useProducts from '../../../shared/hooks/useProducts'
import Loader from '../../../shared/components/Loader/Loader'
const SalesItems = ({ filters = {}, limit }) => {
  const { products, loading, error } = useProducts()
  const { colors } = useTheme()

  const style = {
    '--text-color-grey': colors.grey,
    '--text-color-black': colors.textColorBlack,
    '--font-color-blue': colors.fontColorBlue,
  }



  const salesProducts = products.filter(p => p.discont_price)

  const priceFrom = filters.priceFrom ? +filters.priceFrom : 0;
  const priceTo = filters.priceTo ? +filters.priceTo : Infinity;

  const filtered = salesProducts
    .filter(p => (p.discont_price || p.price) >= priceFrom)
    .filter(p => (p.discont_price || p.price) <= priceTo)

  if (filters.sort === 'price: low-high') {
    filtered.sort((a, b) => (a.discont_price || a.price) - (b.discont_price || b.price))
  }

  if (filters.sort === 'price: high-low') {
    filtered.sort((a, b) => (b.discont_price || b.price) - (a.discont_price || a.price))
  }

  if (filters.sort === 'newest') {
    filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  }

  const limitedSales = limit ? filtered.slice(0, limit) : filtered

  return (
    <section className={styles.salesConteiner} style={style}>
      {loading && <Loader loading={loading} />}
      {error && <p className={styles.error}>Failed to load products.</p>}
      <ProductList products={limitedSales} />
    </section>
  )
}

export default SalesItems
