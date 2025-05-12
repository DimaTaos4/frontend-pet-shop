import styles from './PageLayout.module.css'


const PageLayout = ({children}) => {
    return (
        <div className={styles.layout}>{children}</div>
    )
}
export default PageLayout