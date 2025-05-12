import styles from './NotFoundPage.module.css'
import {Button} from '../../shared/components/Button/Button'
import notFoundImage from '../../assets/404error.svg'
import { useTheme } from '@emotion/react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    const { colors } = useTheme()
    const style = {
        '--color-grey': colors.grey,
        '--color-black': colors.black,
    }
    return (
        <main className={styles.notFoundPage} style={style}>
            <img src={notFoundImage} alt="not found image 404" />
            <div className={styles.notFoundPageInfoMessage}>
                <p>Page Not Found</p>
                <p>We’re sorry, the page you requested could not be found. <br />Please go back to the homepage.</p>
                <Link to='/'><Button>Go Home</Button></Link>
            </div>
        </main>
    )
}
export default NotFoundPage