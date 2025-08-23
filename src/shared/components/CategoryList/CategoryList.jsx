import { Link } from 'react-router-dom';
import styles from './CategoryList.module.css';
import { useTheme } from '@emotion/react';
const IMAGE_BASE_URL = 'https://backend-pet-shop-h47s.onrender.com/';

const CategoryList = ({ items = [], className = '' }) => {
  const { colors } = useTheme();
  const style = {
    '--black': colors.textColorBlack,
  }

  return (

    <ul className={`${styles.listItems} ${className}`} style={style}>
      {items.map(item => (
        <Link to={`/categories/${item.id}`} className={styles.item} key={item.id} style={style}>

          <img src={`${IMAGE_BASE_URL}${item.image}`} alt={item.title} />
          <p>{item.title} </p>
        </Link>
      ))}
    </ul>
  );
};

export default CategoryList;