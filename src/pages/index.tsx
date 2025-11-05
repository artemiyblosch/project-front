import { Flex, GroupBar,
         GroupInfoBar, Chat, 
         RitmikModal} from "@/components";

import { getLocal } from "@/lib/localstorage";
import { updateMessages } from "@/lib/updateMessages";

import React from "react";
import styles from './index.module.scss'
import { getGroupInfo } from "@/lib/groups";

export default function Page() {
    'use client'
    const [messages,setMessages] = React.useState<any>([]);
    const [group, setGroup] = React.useState<string>("2"); 
    const user = JSON.parse(getLocal("User"));
    //const router = useRouter();

    React.useEffect(() => {
        const updateMessages_ = updateMessages(
            group,
            setMessages,
            () => /*router.push('/')*/1
        );
        updateMessages_();
        getGroupInfo(group,setGName,setGVibe,setVibes);
    });

    const [gVibe, setGVibe] = React.useState<string>("");
    const [gName, setGName] = React.useState<string>("");
    const [ritmikOpen, setRitmikOpen] = React.useState<boolean>(false);    
    const [vibes, setVibes] = React.useState<any>({ct:0,cool:0,sad:0});
    return (
    <>
    <RitmikModal 
        isOpen={ritmikOpen} 
        setIsOpen={setRitmikOpen}
        mvibe={gVibe}
        vibes={vibes}
    />
    <Flex align="stretch" className={styles.main}>
        <GroupBar setGroup={setGroup} />
        <Flex 
                direction="column" 
                className={styles.flex}
                align="flex-start"
        >
            <GroupInfoBar 
                color="#33f03dff"
                name={gName}
            />
            <Chat 
                messages={messages}
                setMessages={setMessages}
                group={group}
                user={user}
                vibes={gVibe}
                setRitmikOpen={setRitmikOpen}
            />
        </Flex>
    </Flex>
    </>)
}