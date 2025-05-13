import styles from './CartPage.module.css'
import CartTitleInfo from './CartTitleInfo/CartTitleInfo'
import CartShoppingProducts from './CartShoppingProducts/CartShoppingProducts'
import CartProductsForm from './CartProductsForm/CartProductsForm'
import dataFields from '../../shared/components/FormFields/dataFields'
import { useSelector } from 'react-redux'
import { selectCart } from '../../redux/cart/cart-selector'
import { Button } from '../../shared/components/Button/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Modal from '../../shared/components/Modal/Modal'
import { useTheme } from '@emotion/react'



const CartPage = () => {
    const cart = useSelector(selectCart)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { colors } = useTheme()
    const style = {
        '--text-color': colors.textColorBlack
    }
    return (
        <section style={style}>
            {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                    <div className={styles.messageModal}>
                        <h2>Congratulations!</h2>
                        <p>Your order has been successfully placed on the website.</p>
                        <p>A manager will contact you shortly to confirm your order.</p>
                    </div>
                </Modal>
            )}

            <CartTitleInfo title='Shopping cart' to='/products' button='Back to the store' />
            {cart.length > 0 ? (
                <div className={styles.cartInfo}>
                    <CartShoppingProducts />
                    <CartProductsForm fields={dataFields} onSuccess={() => setIsModalOpen(true)} />
                </div>
            ) : (
                <div className={styles.emtyCart}>
                    <p>Looks like you have no items in your basket currently.</p>
                    <Link to='/products'><Button>Continue Shopping</Button></Link>
                </div>
            )}
        </section>
    )
}
export default CartPage
