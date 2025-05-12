import styles from './MainPageAdvertDiscount.module.css'
import {Button} from '../../../shared/components/Button/Button'
import { Link } from 'react-router-dom'

const MainPageAdvertDiscount = () => {
    return (
        <section className={styles.advertBlock}>
            <div className={styles.textAdvertBlock}>
                <h2>Amazing Discounts on Pets Products!</h2>
                <Link to='/sales'>   <Button className={styles.button}>Check out</Button></Link>
            </div>

        </section>
    )
}
export default MainPageAdvertDiscount