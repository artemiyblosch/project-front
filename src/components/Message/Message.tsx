import styles from "./styles.module.scss"

export type MessageProps = {
    text: string;
    own : boolean;
    type : number;
}

export const Message : React.FC<MessageProps> = ({text, own, type}) => {
    const className = own ? styles.ownMessage : styles.alienedMessage;
    switch(type) {
        case 0: return <div>
            <p className={className}>{text}</p>
        </div>

        case 1: return <div>
                <audio controls className={className}>
                    <source src="vm.mp3" type="audio/mpeg"/>
                    ???
                </audio>
        </div>

        case 2:
        return <div>
            <p className={className}>
                <img alt="" src={text}/>
            </p>
        </div>
    }
}