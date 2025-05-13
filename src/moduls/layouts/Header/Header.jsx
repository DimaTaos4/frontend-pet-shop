import { HomePageLogo, CartIcon } from "../../../shared/components/icons"
import { Link } from "react-router-dom"
import HeaderMenu from "./HeaderMenu/HeaderMenu"
import styles from './Header.module.css'
import Container from "../Container/Container"
import { useSelector } from "react-redux"
import { selectCartCount } from "../../../redux/cart/cart-selector"
import { useTheme } from "@emotion/react"

const Header = () => {
    const { colors } = useTheme()
    const style = {
        '--background-color': colors.fontColorBlue
    }
    const quantity = useSelector(selectCartCount)
    console.log(quantity);

    return (

        <nav className={styles.navbar} style={style}>
            <Container>
                <div className={styles.navbarContent}>
                    <Link to='/' className={styles.headerLogo}><HomePageLogo /></Link>
                    <HeaderMenu />
                    <div>
                        {quantity > 0 && <span className={styles.quantityCart}>{quantity}</span>}
                        <Link to='/cart'><CartIcon /></Link>
                    </div>
                </div>
            </Container>
        </nav>

    )
}
export default Header