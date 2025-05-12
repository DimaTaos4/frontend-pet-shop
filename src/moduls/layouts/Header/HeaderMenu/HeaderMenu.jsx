import { NavLink } from 'react-router-dom'
import styles from './HeaderMenu.module.css'
import headerMenuItems from './HeaderMenuItems'
import { useTheme } from '@emotion/react'


const HeaderMenu = () => {

    const { colors } = useTheme()
    const style = {
        '--text-color': colors.textColorBlack,
        '--blue-color': colors.textColorBlue,
    }
    const elements = headerMenuItems.map(item => <NavLink to={item.to} className={styles.navbarMenuItem} style={style} key={item.to}>{item.menu}</NavLink>)

    return (
        <ul className={styles.navbarMenu}>
            {elements}
        </ul>
    )
}
export default HeaderMenu