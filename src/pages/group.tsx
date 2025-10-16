import { Flex, Message, TextingBar } from "@/components";

import { getLocal } from "@/lib/localstorage";
import { updateMessages } from "@/lib/updateMessages";

import { useSearchParams } from "next/navigation"
import React from "react";
import styles from './group.module.scss'


export default function Page() {
    'use client'
    const searchParams = useSearchParams();
    const group = searchParams?.get("gpk");
    const [messages,setMessages] = React.useState<any>([]);
    
    const user = JSON.parse(getLocal("User"));

    React.useEffect(() => {
        updateMessages(group ?? "",setMessages)();
        setInterval(updateMessages,10000);
    }, [group])

    return (
    <><Flex 
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
    </>)
}