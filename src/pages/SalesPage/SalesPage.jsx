import SalesItems from './SalesItems/SalesItems'
import SectionTitle from '../../shared/components/SectionTitle/SectionTitle'
import Filter from '../../shared/lib/Filter/Filter'
import { useState } from 'react'

const SalesPage = () => {
    const [filters, setFilters] = useState({
        priceFrom: '',
        priceTo: '',
        sort: '',
    })

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }))
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
