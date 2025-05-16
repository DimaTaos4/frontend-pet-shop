import styles from './CartShoppingProducts.module.css'
import Counter from '../../../shared/components/Counter/Counter'
import deleteButton from '../../../assets/deleteButton.svg'
import { useSelector, useDispatch } from 'react-redux'
import { selectCart } from '../../../redux/cart/cart-selector'
import { deleteFromCart } from '../../../redux/cart/cart-slice'
import { updateQuantity } from '../../../redux/cart/cart-slice'
import { useTheme } from '@emotion/react'

const CartShoppingProducts = () => {
    const { colors } = useTheme()
    const style = {
        '--background-color': colors.fontColorBlue,
        '--light-grey': colors.lightGrey,
        '--text-color-black': colors.textColorBlack,
        '--font-color-black': colors.fontColorBlack,
        '--grey': colors.grey,
    }
    const dispatch = useDispatch()
    const onDeleteFromCart = (id) => {
        dispatch(deleteFromCart(id))
    }
    const cart = useSelector(selectCart)
    const IMAGE_URL = 'http://localhost:3333'
    const elements = cart.map(elem =>
        <div key={elem.id} className={styles.chosenProduct}>
            <img className={styles.imageProduct} src={`${IMAGE_URL}${elem.image}`} alt={elem.title} />
            <div className={styles.infoChosenProduct}>
                <div className={styles.titleProduct}>
                    <h2>{elem.title}</h2>
                    <button className={styles.deleteButton} onClick={() => onDeleteFromCart(elem.id)}><img src={deleteButton} alt="delete button" /></button>
                </div>
                <div className={styles.numberChosenProduct}>
                    <Counter
                        quantity={elem.quantity}
                        onIncrement={() => dispatch(updateQuantity({ id: elem.id, quantity: elem.quantity + 1 }))}
                        onDecrement={() => {
                            if (elem.quantity === 1) {
                                dispatch(deleteFromCart(elem.id));
                            } else {
                                dispatch(updateQuantity({ id: elem.id, quantity: elem.quantity - 1 }));
                            }
                        }}
                    />
                    {elem.discont_price ? (
                        <div className={styles.prices}>
                            <span className={styles.discountPrice}>${(elem.discont_price * elem.quantity).toFixed(2)}</span>
                            <span className={styles.price}>${(elem.price * elem.quantity).toFixed(2)}</span>
                        </div>
                    ) : (
                        <div className={styles.prices}>
                            <span className={styles.originalPrice}>${(elem.price * elem.quantity).toFixed(2)}</span>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
    return (
        <div className={styles.allChosenProducts} style={style}>
            {elements}
        </div>

    )
}
export default CartShoppingProducts