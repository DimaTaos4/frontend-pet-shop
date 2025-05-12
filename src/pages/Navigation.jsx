import { Routes, Route, useLocation } from "react-router-dom"
import MainPage from "./MainPage/MainPage"
import Container from "../moduls/layouts/Container/Container"
import CategoriesPage from "./CategoriesPage/CategoriesPage"
import ProductsPage from "./ProductsPage/ProductsPage"
import SalesPage from "./SalesPage/SalesPage"
import NotFoundPage from "./NotFoundPage/NotFoundPage"
import CartPage from "./CartPage/CartPage"
import ScrollToTop from "../moduls/ScrollToTop/ScrollToTop"
import CategoryPage from "./CategoryPage/CategoryPage"
import ProductPage from "./ProductPage/ProductPage"
import Breadcrumbs from "../moduls/Breadcrumbs/Breadcrumbs"

const Navigation = () => {
    const location = useLocation()
    const hideBreadcrumbs = location.pathname === '/' || location.pathname === '/cart'

    return (
        <Container>
            <ScrollToTop />
            {!hideBreadcrumbs && <Breadcrumbs />}
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/sales" element={<SalesPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/categories/:id" element={<CategoryPage />} />
                <Route path="/products/:id" element={<ProductPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Container>
    )
}

export default Navigation
