import styles from './CartTitleInfo.module.css'
import SectionTitle from '../../../shared/components/SectionTitle/SectionTitle'
import { ButtonToPages } from '../../../shared/components/Button/Button'
import { useNavigate } from 'react-router-dom'

const CartTitleInfo = ({ title, button }) => {
  const navigate = useNavigate()

  return (
    <div className={styles.titleLineButton}>
      <SectionTitle>{title}</SectionTitle>
      <div className={styles.line}></div>
      <ButtonToPages onClick={() => navigate(-1)}>{button}</ButtonToPages>
    </div>
  )
}

export default CartTitleInfo
