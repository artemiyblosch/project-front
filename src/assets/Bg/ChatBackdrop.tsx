import { ReactNode } from "react"
import styles from "./styles.module.scss"

type _ = {children : ReactNode}
export const ChatBackdrop : React.FC<_> = ( {children} ) => {
    return <div className={styles.bg}>
        {children}
    </div>
}