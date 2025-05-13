import styles from './Filter.module.css'
import PriceFilter from './PriceFilter/PriceFilter'
import DiscountFilter from './DiscountFilter/DiscountFilter'
import SortFilter from './SortFilter/SortFilter'

const Filter = ({ hideDiscount = false, filters, onFilterChange }) => {
    return (
        <div className={styles.allFilters}>
            <PriceFilter filters={filters} onFilterChange={onFilterChange} />
            {!hideDiscount && (
                <DiscountFilter value={filters.discountOnly} onChange={onFilterChange} />
            )}
            <SortFilter filters={filters} onFilterChange={onFilterChange} />
        </div>
    )
}

export default Filter
