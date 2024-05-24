import { useEffect } from 'react';
import { useMemo } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.css';

export const Modal = ({ children, isOpen, onClose }) => {
    const modalRoot = useMemo(() => document.getElementById('modal-root'), []);
    const el = document.createElement('div');

    useEffect(() => {
        modalRoot.appendChild(el);

        return () => modalRoot.removeChild(el);
    }, [el]);

    if (!isOpen) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={onClose}>&times;</span>
                {children}
            </div>
        </div>,
        el
    );
};
