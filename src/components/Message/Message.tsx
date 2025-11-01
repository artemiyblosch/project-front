import styles from "./styles.module.scss"

export type MessageProps = {
    text: string;
    own : boolean;
    type : number;
}

export const Message : React.FC<MessageProps> = ({text, own, type}) => {
    const className = own ? styles.ownMessage : styles.alienedMessage;
    if(!type) return (
        <div>
            <p className={className}>{text}</p>
        </div>
    )
    if(type) return (
        <div>
            <p className={className}>
                <button>&gt;</button>
            </p>
        </div>
    )
}