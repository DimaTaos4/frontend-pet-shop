import styles from './FormFields.module.css'


const FormField = ({ register, errors, name, placeholder, type, validation, className = '' }) => {
    return (
        <div className={`${styles.inputBlock} ${className}`}>
            <input
                type={type}
                placeholder={placeholder}
                {...register(name, validation)}
                className={styles.input}
            />
            {errors[name] && <p className={`${styles.error} ${className}`}>{errors[name].message}</p>}
        </div>
    )
}
export default FormField