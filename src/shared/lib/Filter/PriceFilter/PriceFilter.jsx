import styles from './PriceFilter.module.css'

const PriceFilter = ({ filters, onFilterChange }) => {
  return (
    <div className={styles.priceFilter}>
      <label>Price</label>
      <input
        type="number"
        placeholder="from"
        value={filters.priceFrom}
        onChange={e => onFilterChange('priceFrom', e.target.value)}
      />
      <input
        type="number"
        placeholder="to"
        value={filters.priceTo}
        onChange={e => onFilterChange('priceTo', e.target.value)}
      />
    </div>
  )
}


export default PriceFilter
