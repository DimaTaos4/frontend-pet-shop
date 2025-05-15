import { useTheme } from '@emotion/react'
import styles from './ProductsItems.module.css'
import ProductList from '../../../shared/components/ProductList/ProductList'
import useProducts from '../../../shared/hooks/useProducts'
import Loader from '../../../shared/components/Loader/Loader'
const ProductsItems = ({ filters }) => {
  const { colors } = useTheme()
  const { products, loading, error } = useProducts()

  const style = {
    '--text-color-grey': colors.grey,
    '--text-color-black': colors.textColorBlack,
    '--font-color-blue': colors.fontColorBlue,
  }



  const filteredProducts = products
    .filter(p => !filters.discountOnly || p.discont_price)
    .filter(p => !filters.priceFrom || (p.discont_price || p.price) >= +filters.priceFrom)
    .filter(p => !filters.priceTo || (p.discont_price || p.price) <= +filters.priceTo)

  if (filters.sort === 'price: low-high') {
    filteredProducts.sort((a, b) => {
      const priceA = a.discont_price || a.price
      const priceB = b.discont_price || b.price
      return priceA - priceB
    })
  }

  if (filters.sort === 'price: high-low') {
    filteredProducts.sort((a, b) => {
      const priceA = a.discont_price || a.price
      const priceB = b.discont_price || b.price
      return priceB - priceA
    })
  }

  if (filters.sort === 'newest') {
    filteredProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  }

  return (
    <section className={styles.productItems} style={style}>
      {loading && <Loader loading={loading} />}
      {error && <p className={styles.error}> Failed to load products.</p>}
      <ProductList products={filteredProducts} />
    </section>
  )
}

export default ProductsItems;
