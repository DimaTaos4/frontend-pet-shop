import SectionTitle from '../../shared/components/SectionTitle/SectionTitle'
import ProductsItems from './ProductsItems/ProductsItems'
import Filter from '../../shared/lib/Filter/Filter'
import { useSearchParams } from 'react-router-dom'

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const filters = {
    priceFrom: searchParams.get('priceFrom') || '',
    priceTo: searchParams.get('priceTo') || '',
    sort: searchParams.get('sort') || '',
    discountOnly: searchParams.get('discountOnly') === 'true',
  }

  const handleFilterChange = (key, value) => {
    const updatedParams = new URLSearchParams(searchParams)
    if (value) {
      updatedParams.set(key, value)
    } else {
      updatedParams.delete(key)
    }
    setSearchParams(updatedParams)
  }

  return (
    <>
      <SectionTitle>All products</SectionTitle>
      <Filter filters={filters} onFilterChange={handleFilterChange} />
      <ProductsItems filters={filters} />
    </>
  )
}

export default ProductsPage
