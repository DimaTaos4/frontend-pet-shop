import styles from './Button.module.css'
import { useTheme } from '@emotion/react'
export const Button = ({ children, type = 'button', className = '', ...props }) => {
    return (
        <button type={type} className={`${styles.btn} ${className}`} {...props}>{children}</button>
    )
}

export const ButtonToPages = ({ children, type = 'button', width = 'auto', className = '', onClick, ...props }) => {
    const { colors } = useTheme()
    const style = {
        '--text-color-btn': colors.grey,
    }
    return (
        <button onClick={onClick} type={type} className={`${styles.btnToPages} ${className}`} width={width} {...props} style={style}>{children}</button>
    )
}
export const SubmitButton = ({ children, type = 'submit', className = '', ...props }) => {
    const { colors } = useTheme()
    const style = {
        '--text-color-btn': colors.textColorBlack,
        '--light-grey': colors.lightGrey,
        '--text-submited-btn': colors.textColorBlue,
        '--btn-hover-color': colors.fontColorBlack,
    }
    return (<button type={type} className={`${styles.submitBtn} ${className}`} {...props} style={style}>{children} </button>)
}
