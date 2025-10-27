import { ChatBackdrop } from "@/assets"
import { TextingBar } from "../TextingBar"
import { Message } from "../Message"

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
    <ChatBackdrop>
        <TextingBar 
            group={group} 
            user={user} 
            setMessages={setMessages}
        />
            { messages.map( (m : any) => <Message
                text = {m?.text} 
                own = {m?.owner?.tag === user?.tag}
            /> )}
    </ChatBackdrop>
    )
}