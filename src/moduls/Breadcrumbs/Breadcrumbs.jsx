import { useLocation, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ButtonToPages } from '../../shared/components/Button/Button'
import styles from './Breadcrumbs.module.css'
import axios from 'axios'

const Breadcrumbs = () => {
    const location = useLocation()
    const [breadcrumbItems, setBreadcrumbItems] = useState([])

    useEffect(() => {

        const pathnames = location.pathname.split('/').filter(x => x)

        const fetchData = async () => {
            const items = await Promise.all(pathnames.map(async (segment, index) => {
                const url = '/' + pathnames.slice(0, index + 1).join('/')

                if (segment === 'categories') return { name: 'Categories', path: url }
                if (segment === 'products') return { name: 'Products', path: url }
                if (segment === 'sales') return { name: 'Sales', path: url }
                if (segment === 'cart') return { name: 'Cart', path: url }

                if (pathnames[index - 1] === 'categories') {
                    try {
                        const res = await axios.get(`http://localhost:3333/categories/${segment}`)
                        return { name: res.data.category.title, path: url }
                    } catch {
                        return { name: 'Category', path: url }
                    }
                }

                if (pathnames[index - 1] === 'products') {
                    try {
                        const res = await axios.get(`http://localhost:3333/products/${segment}`)
                        return { name: res.data[0].title, path: url }
                    } catch {
                        return { name: 'Product', path: url }
                    }
                }

                return { name: segment, path: url }
            }))

            if (location.pathname !== '/') {
                setBreadcrumbItems([{ name: 'Home', path: '/' }, ...items])
            } else {
                setBreadcrumbItems([...items])
            }
        }

        fetchData()
    }, [location])

    return (
        <nav className={styles.breadcrumbsLinks}>
            {breadcrumbItems.map((item, index) => (
                <div key={index} className={styles.breadcrumbItem}>
                    <Link to={item.path} className={styles.link}>
                        <ButtonToPages>{item.name}</ButtonToPages>
                    </Link>
                    {index < breadcrumbItems.length - 1 && (
                        <span className={styles.separatorLine}></span>
                    )}
                </div>
            ))}
        </nav>
    )
}

export default Breadcrumbs
