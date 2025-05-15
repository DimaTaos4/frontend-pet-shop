import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from '@emotion/react';
import { selectCategories } from '../../../redux/categories/categories-selector';
import { fetchCategories } from '../../../redux/categories/categories-thunk';
import CategoryList from '../../../shared/components/CategoryList/CategoryList';
import styles from './MainPageCategories.module.css'
import Loader from '../../../shared/components/Loader/Loader';
const MainPageCategories = () => {
  const { items, error, loading } = useSelector(selectCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const { colors } = useTheme();
  const style = { '--black': colors.textColorBlack };

  const first4 = items.slice(0, 4);

  return (
    <section className={styles.categoriesConteiner}>
      {loading && <Loader loading={true} />}
      {error && <p className={styles.error}>Failed to load categories</p>}
      {first4.length > 0 && <CategoryList className={styles.MainPageCategoriesStyle} items={first4} style={style} />}
    </section>
  );
};

export default MainPageCategories;