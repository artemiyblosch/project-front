import { useContext } from "react";
import styles from "./styles.module.scss"
import { Context } from "../Context";

export type MessageProps = {
    text: string;
    own : boolean;
    type : number;
}

export const Message : React.FC<MessageProps> = ({text, own, type}) => {
    const className = own ? styles.ownMessage : styles.alienedMessage;
    const {setRitmikAnim} = useContext(Context);
    switch(type) {
        case 0: return <div>
            <p className={className}>{text}</p>
        </div>

        case 1: return <div>
                <audio controls className={className} 
                onPlay={() => setRitmikAnim(true)} onEnded={() => setRitmikAnim(false)} 
                onPause={() => setRitmikAnim(false)}>
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