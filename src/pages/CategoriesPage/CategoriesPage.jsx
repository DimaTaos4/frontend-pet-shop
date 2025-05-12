import styles from './CategoriesPage.module.css'
import CategoriesItems from './CategoriesItems/CategoriesItems'

import { useTheme } from '@emotion/react'


const CategoriesPage = () => {

    const { colors } = useTheme()
    const style = {
        '--black': colors.black,
    }
    return (
        <article className={styles.categoriesConteiner} style={style}>
            <h2 className={styles.titleCategories}> Categories </h2>
            <CategoriesItems />
        </article>


    )
}
export default CategoriesPage