import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from '../../shared/components/Button/Button'
import styles from './ProductPage.module.css'
import Counter from '../../shared/components/Counter/Counter'
import { addToCart } from '../../redux/cart/cart-slice'
import { useDispatch } from 'react-redux'
import { useTheme } from '@emotion/react'
import Loader from '../../shared/components/Loader/Loader'
const ProductPage = () => {
    const { colors } = useTheme()
    const style = {
        '--background-color': colors.fontColorBlue,
        '--font-black': colors.fontColorBlack,
        '--font-color-blue': colors.fontColorBlue,
        '--grey': colors.grey,
        '--text-black': colors.textColorBlack,
    }
    const [quantity, setQuantity] = useState(1)
    const [isAdded, setIsAdded] = useState(false)
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [showFullDescription, setShowFullDescription] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://backend-pet-shop-h47s.onrender.com/products/${id}`)
                setProduct(response.data[0])
            } catch {
                setError('Product loading error')
            } finally {
                setLoading(false)
            }
        }

        fetchProduct()
    }, [id])

    if (loading) return <Loader loading={loading} />
    if (error) return <p className={styles.error}>{error}</p>
    if (!product) return <p className={styles.notFoundProduct}>Product not found</p>

    const IMAGE_BASE_URL = 'https://backend-pet-shop-h47s.onrender.com/'

    const toggleDescription = () => setShowFullDescription(prev => !prev)
    const MAX_LENGTH = 300
    const isLong = product.description.length > MAX_LENGTH
    const displayedDescription = showFullDescription
        ? product.description
        : product.description.slice(0, MAX_LENGTH) + (isLong ? '...' : '')

    const onAddToCart = () => {
        dispatch(addToCart({ ...product, quantity }))
        setIsAdded(true)

        setTimeout(() => {
            setIsAdded(false)
        }, 3000)
    }

    return (
        <div className={styles.productPage} style={style}>
            <img src={`${IMAGE_BASE_URL}${product.image}`} alt={product.title} className={styles.productImage} />
            <div className={styles.productInfo}>
                <h2>{product.title}</h2>

                <div className={styles.prices}>
                    {product.discont_price ? (
                        <>
                            <span className={styles.discountPrice}>${product.discont_price}</span>
                            <span className={styles.price}>${product.price}</span>
                            <span className={styles.salesNumber}>
                                -{Math.floor((product.price - product.discont_price) / product.price * 100)}%
                            </span>
                        </>
                    ) : (
                        <span className={styles.discountPrice}>${product.price}</span>
                    )}
                </div>

                <div className={styles.function}>
                    <Counter
                        className={styles.counter}
                        quantity={quantity}
                        onIncrement={() => setQuantity(prev => prev + 1)}
                        onDecrement={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}
                    />
                    <Button
                        className={isAdded ? styles.btnAddedToCart : styles.btnProduct}
                        onClick={onAddToCart}
                    >
                        {isAdded ? 'Added' : 'Add to cart'}
                    </Button>
                </div>

                <div className={styles.description}>
                    <h3>Description</h3>
                    <p>{displayedDescription}</p>
                    {isLong && (
                        <button onClick={toggleDescription} className={styles.readMoreBtn}>
                            {showFullDescription ? 'Hide' : 'Read more'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductPage
