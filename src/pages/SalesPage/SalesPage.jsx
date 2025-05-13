import SalesItems from './SalesItems/SalesItems'
import SectionTitle from '../../shared/components/SectionTitle/SectionTitle'
import Filter from '../../shared/lib/Filter/Filter'
import { useSearchParams } from 'react-router-dom'

const SalesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const filters = {
    priceFrom: searchParams.get('priceFrom') || '',
    priceTo: searchParams.get('priceTo') || '',
    sort: searchParams.get('sort') || '',
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
      <SectionTitle>Discounted items</SectionTitle>
      <Filter
        hideDiscount={true}
        filters={filters}
        onFilterChange={handleFilterChange}
      />
      <SalesItems filters={filters} />
    </>
  )
}

export default SalesPage
