import styles from './Counter.module.css'

const Counter = ({ onIncrement, onDecrement, quantity }) => {
    return (
        <div className={styles.counterConteiner}>
            <button className={styles.counterButton1} onClick={onDecrement}>−</button>
            <div className={styles.counterCount}>{quantity}</div>
            <button className={styles.counterButton2} onClick={onIncrement}>+</button>
        </div>
    );
};

export default Counter;