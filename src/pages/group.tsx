import { Flex, GroupBar, Message, TextingBar } from "@/components";

import { getLocal } from "@/lib/localstorage";
import { updateMessages } from "@/lib/updateMessages";

import { useRouter, useSearchParams } from "next/navigation"
import React from "react";
import styles from './group.module.scss'
import { ChatBackdrop } from "@/assets";


export default function Page() {
    'use client'
    const [messages,setMessages] = React.useState<any>([]);
    
    const searchParams = useSearchParams();
    const group = searchParams?.get("gpk");
    
    const user = JSON.parse(getLocal("User"));

    const router = useRouter();
    const updateMessages_ = updateMessages(
        group ?? "",
        setMessages,
        () => router.push("/")
    )

    React.useEffect(() => {
        updateMessages_();
        setInterval(updateMessages_, 10000);
    }, []);

    return (
    <Flex align="stretch" className={styles.main}>
    <GroupBar/>
    <ChatBackdrop className={styles.chatMain}>
        <Flex 
            direction="column" 
            className={styles.flex}
            align="flex-start"
        >
        <TextingBar 
            group={group ?? ""} 
            user={user} 
            setMessages={setMessages}
        /> 
            { messages.map( (m : any) => <Message 
                text = {m?.text} 
                own = {m?.owner?.tag === user?.tag}
            /> )}
        </Flex>
    </ChatBackdrop>
    </Flex>)
}