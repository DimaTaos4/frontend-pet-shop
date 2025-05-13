import styles from './DiscountFilter.module.css'
import { useSearchParams } from 'react-router-dom'
import { CheckedCheckbox } from '../../../components/icons'

const DiscountFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    const newParams = new URLSearchParams(searchParams);
    if (e.target.checked) {
      newParams.set('discountOnly', 'true');
    } else {
      newParams.delete('discountOnly');
    }
    setSearchParams(newParams);
  };

  const discountOnly = searchParams.get('discountOnly') === 'true';

  return (
    <div className={styles.discountFilter}>
      <h2>Discounted items</h2>
      <label className={styles.checkboxContainer}>
        <input
          type="checkbox"
          checked={discountOnly}
          onChange={handleChange}
        />
        <span className={styles.checkmark}>
          {discountOnly && <CheckedCheckbox className={styles.checkIcon} />}
        </span>
      </label>
    </div>
  )
}

export default DiscountFilter;
