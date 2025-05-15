import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from '@emotion/react';
import { selectCategories } from '../../../redux/categories/categories-selector';
import { fetchCategories } from '../../../redux/categories/categories-thunk';
import CategoryList from '../../../shared/components/CategoryList/CategoryList';
import styles from './CategoriesItems.module.css'
import Loader from '../../../shared/components/Loader/Loader';
const CategoriesItems = () => {

    const { items, error, loading } = useSelector(selectCategories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const { colors } = useTheme();
    const style = {
        '--black': colors.textColorbBlack,
        '--color-font-blue': colors.textColorBlue,
    };

    return (
        <>
            {loading && <Loader loading={loading}  />}
            {error && <p className={styles.error}>Failed to load categories</p>}
            {items.length > 0 && <CategoryList className={styles.categoriesItems} items={items} style={style} />}
        </>
    );
};

export default CategoriesItems;