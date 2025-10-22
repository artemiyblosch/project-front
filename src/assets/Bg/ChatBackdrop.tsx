import { ReactNode } from "react"
import styles from "./styles.module.scss"

type _ = {children : ReactNode, className : string}
export const ChatBackdrop : React.FC<_> = ( {children, className} ) => {
    return <div className={`${styles.bg} ${className}`}>
        {children}
    </div>
}