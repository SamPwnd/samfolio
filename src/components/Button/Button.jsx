import React from "react";
import styles from "./Button.module.scss"

export default function Button({href, classes, type, children, onClick}) {
    const extType = type && `btn--${type}`;
    const typeClass = type && styles[extType];
    return (
        <a 
            href={href}
            className={`${styles.btn} ${typeClass} ${classes} link`}
            onClick={onClick ? onClick : null}
        >
            {children}
        </a>
    );
}