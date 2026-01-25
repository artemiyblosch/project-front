import { ChatBackdrop } from "@/assets"
import { Message } from "../Message"
import styles from './styles.module.scss'
import React, { useContext } from "react"
import { Ritmik } from "../Ritmik"
import { Context } from "../Context"

export const Chat : React.FC = () => {
    const {messages, user} = useContext(Context);

    return (
    <>
    <Ritmik className={styles.ritmik}/>

    <ChatBackdrop className={styles.bg}>
            { messages.map( (m : any) => <Message
                text = {m?.text} 
                own = {m?.owner?.tag === user?.tag}
                type = {m?.type}
            /> )}
    </ChatBackdrop>
    </>
    )
}