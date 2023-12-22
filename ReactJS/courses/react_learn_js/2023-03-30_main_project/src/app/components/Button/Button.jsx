import React, { useContext } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { ThemeContext } from '@/app/context/ThemeContext/themeContext';

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
    const { theme } = useContext(ThemeContext);
    
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
