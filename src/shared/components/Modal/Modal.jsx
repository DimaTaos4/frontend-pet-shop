import styles from './Modal.module.css'
import ReactDOM from 'react-dom'
import closeModal from '../../../assets/closeModal.svg'
import { useTheme } from '@emotion/react'
const Modal = ({ onClose, children }) => {
    const { colors } = useTheme()
    const style = {
        '--font-color-blue': colors.fontColorBlue,
    }

    return ReactDOM.createPortal(
        <div className={styles.backdrop} onClick={onClose} style={style}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                {children}
                <button onClick={onClose} className={styles.closeBtn}><img src={closeModal} alt="close modal" /></button>
            </div>
        </div>,
        document.getElementById('modal-root')
    )
}

export default Modal
