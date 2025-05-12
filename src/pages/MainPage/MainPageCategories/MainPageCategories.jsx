import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from '@emotion/react';
import { selectCategories } from '../../../redux/categories/categories-selector';
import { fetchCategories } from '../../../redux/categories/categories-thunk';
import CategoryList from '../../../shared/components/CategoryList/CategoryList';
import styles from './MainPageCategories.module.css'
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
    <section>
      {loading && <p>Loading</p>}
      {error && <p>Error</p>}
      {first4.length > 0 && <CategoryList className={styles.MainPageCategoriesStyle} items={first4} style={style} />}
    </section>
  );
};

export default MainPageCategories;