import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

const buttonStyles = {
    primary: styles.primary,
    secondary: styles.secondary,
};

export function Button({ 
    children, 
    type  = 'primary', 
    className, 
    onClick,
    disabled
}) {
    return (
        <button 
            className={classNames({
                [styles.root]: true,
                [buttonStyles[type]]: true,
                [styles.disabled]: disabled,
                [className]: true,  
            })}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
