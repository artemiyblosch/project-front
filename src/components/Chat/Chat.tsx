import { ChatBackdrop } from "@/assets"
import { TextingBar } from "../TextingBar"
import { Message } from "../Message"
import styles from './styles.module.scss'

type ChatProps = {
    messages : any;
    setMessages : React.Dispatch<any>;
    group : string;
    user : any;
}

export const Chat : React.FC<ChatProps> = ({
    group, user, setMessages, messages
}) => {
    return (
    <>
    <ChatBackdrop className={styles.bg}>
            { messages.map( (m : any) => <Message
                text = {m?.text} 
                own = {m?.owner?.tag === user?.tag}
                type = {m?.type}
            /> )}
    </ChatBackdrop>
    <TextingBar 
        group={group} 
        user={user} 
        setMessages={setMessages}
    />
    </>
    )
}