import styles from './CartTitleInfo.module.css'
import SectionTitle from '../../../shared/components/SectionTitle/SectionTitle'
import { ButtonToPages } from '../../../shared/components/Button/Button'
import { Link } from 'react-router-dom'
const CartTitleInfo = ({ title, to, button }) => {
    return (
        <div className={styles.titleLineButton}>
            <SectionTitle>{title}</SectionTitle>
            <div className={styles.line}></div>
            <Link to={to}><ButtonToPages>{button} </ButtonToPages></Link>
        </div>
    )
}
export default CartTitleInfo