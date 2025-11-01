import { Flex, GroupBar,
         GroupInfoBar, Chat } from "@/components";

import { getLocal } from "@/lib/localstorage";
import { updateMessages } from "@/lib/updateMessages";

import { useRouter, useSearchParams } from "next/navigation"
import React from "react";
import styles from './group.module.scss'

export default function Page() {
    'use client'
    const [messages,setMessages] = React.useState<any>([]);
    const searchParams = useSearchParams();
    const group : string = searchParams?.get("gpk") ?? "3"; //BUG MB
    const user = JSON.parse(getLocal("User"));

    const router = useRouter();
    const updateMessages_ = updateMessages(
        group,
        setMessages,
        () => /*router.push('/')*/1
    )

    React.useEffect(() => {
        updateMessages_();
        setInterval(updateMessages_, 10000);
    }, []);

    return (
    <Flex align="stretch" className={styles.main}>
        <GroupBar/>
        <Flex 
                direction="column" 
                className={styles.flex}
                align="flex-start"
        >
            <GroupInfoBar 
                color="#33f03dff"
                group={group}
            />
            <Chat 
                messages={messages}
                setMessages={setMessages}
                group={group}
                user={user}
            />
        </Flex>
    </Flex>)
}