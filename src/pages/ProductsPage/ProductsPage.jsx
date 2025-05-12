import SectionTitle from '../../shared/components/SectionTitle/SectionTitle'
import ProductsItems from './ProductsItems/ProductsItems'

import { Button } from '../../shared/components/Button/Button'

const ProductsPage = () => {

    return (
        <>
            <SectionTitle>All products</SectionTitle>
            <ProductsItems />
        </>
    )
}
export default ProductsPage