import { ChatBackdrop } from "@/assets"
import { Message } from "../Message"
import styles from './styles.module.scss'
import React, { useContext, useEffect, useRef } from "react"
import { Ritmik } from "../Ritmik"
import { Context } from "../Context"
import { Warn } from "../Warn"

export const Chat : React.FC = () => {
    const {messages, user} = useContext(Context);
    const bottomRef = useRef<null | HTMLDivElement>(null);

    const scrollToBottom = () => {
        if(!bottomRef.current) return;
        bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    useEffect(scrollToBottom,[messages]);

    return (
    <>
    <Ritmik className={styles.ritmik}/>
    <Warn/>
    <ChatBackdrop className={styles.bg}>
            { messages.map( (m : any) => <Message
                text = {m?.text} 
                own = {m?.owner?.tag === user?.tag}
                type = {m?.type}
            /> )}
            <div ref={bottomRef}></div>
    </ChatBackdrop>
    </>
    )
}