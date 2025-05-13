import styles from './CartProductsForm.module.css'
import FormField from '../../../shared/components/FormFields/FormFields'
import { useForm } from 'react-hook-form'
import { SubmitButton } from '../../../shared/components/Button/Button'
import { useState } from 'react'
import { sendOrderRequest } from '../../../shared/api/sendOrder-api'
import { useSelector, useDispatch } from 'react-redux'
import { selectCart } from '../../../redux/cart/cart-selector'
import { clearCart } from '../../../redux/cart/cart-slice'

const CartProductsForm = ({ fields, style, onSuccess }) => {
    const { register, reset, handleSubmit, formState: { errors }, } = useForm()
    const [isFormSubmited, setIsFromSubmited] = useState(false)
    const dispacth = useDispatch()
    const onSubmit = async (values) => {
        try {
            await sendOrderRequest(values);
            reset();
            setIsFromSubmited(true)
            console.log('Form is successfully sent');
            onSuccess?.();
            setTimeout(() => {
                dispacth(clearCart());
            }, 2000);
        } catch (error) {
            console.error('Something went wrong', error.message);
        }
    }

    const cart = useSelector(selectCart)

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)

    const totalPrice = cart.reduce((acc, item) => {
        const price = item.discont_price || item.price
        return acc + price * item.quantity
    }, 0)

    return (
        <div className={styles.formCartInfo}>
            <h2>Order details</h2>
            <p>{totalQuantity} item{totalQuantity !== 1 ? 's' : ''}</p>
            <div className={styles.infoTotalPrice}>
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
                {fields.map((field) => (
                    <FormField
                        key={field.name}
                        {...field}
                        register={register}
                        errors={errors}
                        className={styles.formCart}
                    />

                ))}


                {isFormSubmited ? <SubmitButton type='submit' disabled>The order is placed</SubmitButton> :
                    < SubmitButton type='submit' style={style} className={styles.btnSubmit} >Order</SubmitButton>}
            </form>
        </div >
    )
}
export default CartProductsForm