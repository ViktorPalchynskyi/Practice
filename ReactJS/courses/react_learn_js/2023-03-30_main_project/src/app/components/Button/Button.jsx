import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

const buttonStyles = {
    primary: styles.primary,
    secondary: styles.secondary,
};

export function Button({ children, disabled, type  = 'primary', className, onClick }) {
    return (
        <button 
            className={classNames({
                [styles.root]: true,
                [buttonStyles[type]]: true,
                [styles.disabled]: disabled,
                [className]: true,  
            })}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
