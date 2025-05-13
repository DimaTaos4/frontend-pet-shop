import styles from './SortFilter.module.css'
import { useId } from 'react'

const SortFilter = ({ filters, onFilterChange }) => {
  const id = useId()
  return (
    <div className={styles.sortFilter}>
      <label htmlFor={id}>Sorted</label>
      <select
        id={id}
        className={styles.select}
        value={filters.sort}
        onChange={(e) => onFilterChange('sort', e.target.value)}
      >
        <option value="">by default</option>
        <option value="newest">newest</option>
        <option value="price: high-low">price: high-low</option>
        <option value="price: low-high">price: low-high</option>
      </select>
    </div>
  )
}

export default SortFilter
