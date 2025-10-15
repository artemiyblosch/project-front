import styles from "./styles.module.scss"

export type MessageProps = {
    text: string;
    own : boolean;
}

export const Message : React.FC<MessageProps> = ({text, own}) => {
    return (
        <div>
            <p className={own ? styles.ownMessage : styles.alienedMessage}>{text}</p>
        </div>
    )
}