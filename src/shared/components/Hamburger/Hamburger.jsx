import styles from './Hamburger.module.css'
import Hamburger from "hamburger-react"
import HeaderMenu from '../../../moduls/layouts/Header/HeaderMenu/HeaderMenu'
import { useSelector, useDispatch } from 'react-redux'
import { selectHamburger } from '../../../redux/hamburger/hamburger-selector'
import { openHamburger, closeHamburger } from '../../../redux/hamburger/hamburger-slice'

const HamburgerMenu = () => {
    const dispatch = useDispatch()
    const isOpened = useSelector(selectHamburger)

    const toggleBurger = () => {
        dispatch(openHamburger())
    }

    const handleClose = () => {
        dispatch(closeHamburger())
    }

    return (
        <div className={styles.hamburger}>
            <button onClick={toggleBurger}><Hamburger toggled={isOpened} /></button>
            {isOpened && <HeaderMenu onItemClick={handleClose} />}
        </div>
    )
}
export default HamburgerMenu