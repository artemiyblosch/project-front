import React from "react"
import styles from "./styles.module.scss"

type _ = {
    children : React.ReactNode;
    isOpen : boolean;
}

export const Modal : React.FC<_> = ({
    children,isOpen
}) => {
    return (
    <div className={styles.bg} data-open={isOpen}>
        {children}
    </div>
    )
}