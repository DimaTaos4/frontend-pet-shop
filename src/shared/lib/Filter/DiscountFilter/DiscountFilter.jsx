import styles from './DiscountFilter.module.css'
import { CheckedCheckbox } from '../../../components/icons'

const DiscountFilter = ({ value, onChange }) => {
  return (
    <div className={styles.discountFilter}>
      <h2>Discounted items</h2>
      <label className={styles.checkboxContainer}>
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange('discountOnly', e.target.checked)}
        />
        <span className={styles.checkmark}>
          {value && <CheckedCheckbox className={styles.checkIcon} />}
        </span>
      </label>
    </div>
  )
}

export default DiscountFilter
