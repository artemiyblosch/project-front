import { Flex, Message, TextingBar } from "@/components";

import { getLocal } from "@/lib/localstorage";
import { updateMessages } from "@/lib/updateMessages";

import { useRouter, useSearchParams } from "next/navigation"
import React from "react";
import styles from './group.module.scss'
import { ChatBackdrop } from "@/assets/Bg";


export default function Page() {
    'use client'
    const router = useRouter();
    const updateMessages_ = () => (
        updateMessages(
            group ?? "",
            setMessages,
            ()=> router.push("/")
        )
    )


    const searchParams = useSearchParams();
    const group = searchParams?.get("gpk");
    const [messages,setMessages] = React.useState<any>([]);
    
    const user = JSON.parse(getLocal("User"));

    React.useEffect(() => {
        updateMessages_();
        setInterval(updateMessages_,10000);
    }, [group])

    return (
    <Flex align="stretch" className={styles.main}>
    <ChatBackdrop>
        <Flex 
            direction="column" 
            className={styles.flex}
            align="flex-start"
        >
            { messages.map( (m : any) => <Message 
                text = {m?.text} 
                own = {m?.owner?.tag === user?.tag}
            /> )}
        </Flex>
        <TextingBar 
            group={group ?? ""} 
            user={user} 
            setMessages={setMessages}
        /> 
    </ChatBackdrop>
    </Flex>)
}