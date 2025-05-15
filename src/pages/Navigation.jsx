import { Routes, Route, useLocation, matchRoutes } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import Container from "../moduls/layouts/Container/Container";
import CategoriesPage from "./CategoriesPage/CategoriesPage";
import ProductsPage from "./ProductsPage/ProductsPage";
import SalesPage from "./SalesPage/SalesPage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import CartPage from "./CartPage/CartPage";
import ScrollToTop from "../moduls/ScrollToTop/ScrollToTop";
import CategoryPage from "./CategoryPage/CategoryPage";
import ProductPage from "./ProductPage/ProductPage";
import Breadcrumbs from "../moduls/Breadcrumbs/Breadcrumbs";

const Navigation = () => {
    const location = useLocation();

    // Описание маршрутов
    const routes = [
        { path: "/" },
        { path: "/categories" },
        { path: "/products" },
        { path: "/sales" },
        { path: "/cart" },
        { path: "/categories/:id" },
        { path: "/products/:id" },
        { path: "*" }
    ];

    const matched = matchRoutes(routes, location.pathname);
    const isNotFound = matched?.[0]?.route?.path === "*";

    const hideBreadcrumbs =
        location.pathname === "/" ||
        location.pathname === "/cart" ||
        isNotFound;

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
    );
};

export default Navigation;
