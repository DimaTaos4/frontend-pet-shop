import styles from './Filter.module.css'
import PriceFilter from './PriceFilter/PriceFilter'
import DiscountFilter from './DiscountFilter/DiscountFilter'
import SortFilter from './SortFilter/SortFilter'

const Filter = ({ filters, onFilterChange, hideDiscount = false }) => {
    return (
        <div className={styles.allFilters}>
            <PriceFilter filters={filters} onFilterChange={onFilterChange} />
            {!hideDiscount && (
                <DiscountFilter filters={filters} />
            )}
            <SortFilter filters={filters} onFilterChange={onFilterChange} />
        </div>
    )
}

export default Filter
