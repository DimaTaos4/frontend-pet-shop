import styles from './ProductList.module.css'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/cart/cart-slice'
import { selectCart } from '../../../redux/cart/cart-selector'

import { useState } from 'react';

const ProductList = ({ products = [] }) => {
    const IMAGE_BASE_URL = 'http://localhost:3333/'

    const cart = useSelector(selectCart)
    console.log(cart)

    const dispatch = useDispatch()

    const [addedItems, setAddedItems] = useState({})

    const onAddToCart = (product) => {
        dispatch(addToCart({ ...product, quantity: 1 }))

        setAddedItems((prevState) => ({
            ...prevState,
            [product.id]: 'Added',
        }))

        setTimeout(() => {
            setAddedItems((prevState) => ({
                ...prevState,
                [product.id]: 'Add to cart',
            }))
        }, 3000)
    }

    return (
        products.map(elem => {
            const buttonText = addedItems[elem.id] || 'Add to cart'

            return (
                <Link to={`/products/${elem.id}`} className={styles.item} key={elem.id}>
                    <img src={`${IMAGE_BASE_URL}${elem.image}`} alt={elem.title} />
                    {elem.discont_price && (
                        <span className={styles.salesNumber}>
                            -{Math.floor((elem.price - elem.discont_price) / elem.price * 100)}%
                        </span>
                    )}
                    <Button
                        className={buttonText === 'Added' ? styles.btnAddedToCart : styles.btnAddToCart}
                        onClick={(e) => {
                            onAddToCart(elem)
                            e.preventDefault()
                            e.stopPropagation()
                        }}
                    >
                        {buttonText}
                    </Button>
                    <div className={styles.itemInfo}>
                        <p>{elem.title} </p>
                        <div className={styles.prices}>
                            {elem.discont_price ? (
                                <>
                                    <span className={styles.discountPrice}>${elem.discont_price}</span>
                                    <span className={styles.price}>${elem.price}</span>
                                </>
                            ) : (
                                <span className={styles.discountPrice}>${elem.price}</span>
                            )}
                        </div>
                    </div>
                </Link>
            )
        })
    )
}

export default ProductList
