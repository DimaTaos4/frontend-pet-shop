import styles from './CartPage.module.css'
import CartTitleInfo from './CartTitleInfo/CartTitleInfo'
import CartShoppingProducts from './CartShoppingProducts/CartShoppingProducts'
import CartProductsForm from './CartProductsForm/CartProductsForm'
import dataFields from '../../shared/components/FormFields/dataFields'
import { useSelector } from 'react-redux'
import { selectCart } from '../../redux/cart/cart-selector'
import { Button } from '../../shared/components/Button/Button'
import { Link } from 'react-router-dom'

const CartPage = () => {
    const cart = useSelector(selectCart)


    return (
        <section >
            <CartTitleInfo title='Shopping cart' to='/products' button='Back to the store' />
            {cart.length > 0 ? <div className={styles.cartInfo}>
                <CartShoppingProducts />
                <CartProductsForm fields={dataFields} />
            </div> : <div className={styles.emtyCart}>
                <p>Looks like you have no items in your basket currently.</p>
                <Link to='/products'><Button>Continue Shopping</Button></Link>
            </div>}

        </section>
    )
}
export default CartPage