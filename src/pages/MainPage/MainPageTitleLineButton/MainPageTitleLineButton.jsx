import styles from './MainPageTitleLineButton.module.css'
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle"
import { Link } from "react-router-dom"
import { ButtonToPages } from "../../../shared/components/Button/Button"

const MainPageTitleLineButton = ({ to, title, button }) => {
    return (
        <div className={styles.titleLineButton}>
            <SectionTitle>{title}</SectionTitle>
            <div className={styles.line}></div>
            <Link to={to}><ButtonToPages>{button} </ButtonToPages></Link>
        </div>
    )
}
export default MainPageTitleLineButton