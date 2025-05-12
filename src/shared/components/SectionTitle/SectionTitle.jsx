import styles from './SectionTitle.module.css'
import { useTheme } from '@emotion/react'
const SectionTitle = ({ children }) => {
    const { colors } = useTheme()
    const style = {
        '--title-color': colors.textColorBlack,
    }
    return (
        <h2 className={styles.sectionTitle} style={style}>{children}</h2>
    )
}
export default SectionTitle