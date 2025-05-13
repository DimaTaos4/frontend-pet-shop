import SectionTitle from '../../shared/components/SectionTitle/SectionTitle'
import ProductsItems from './ProductsItems/ProductsItems'
import Filter from '../../shared/lib/Filter/Filter'
import { useState } from 'react'

const ProductsPage = () => {
  const [filters, setFilters] = useState({
    discountOnly: false,
    priceFrom: '',
    priceTo: '',
    sort: '',
  })

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
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
