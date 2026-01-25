import { GroupBar,
         GroupInfoBar, Chat, 
         RitmikModal,
         StickerModal,
         Grid,
         TextingBar} from "@/components";

import { getLocal } from "@/lib/localstorage";
import { updateMessages } from "@/lib/updateMessages";

import React from "react";
import styles from './index.module.scss'
import { getGroupInfo } from "@/lib/groups";
import { useInterval } from "@/lib/useInterval";
import { Context } from "@/components/Context";
import { ChatBackdrop } from "@/assets";

export default function Page() {
    'use client'
    const [messages,setMessages] = React.useState<any>([]);
    const [group, setGroup] = React.useState<string>("");
    const user = JSON.parse(getLocal("User"));
    //const router = useRouter();
    useInterval(()=>{
        if(group === "") return;
        updateMessages(
            group,
            setMessages,
            () => /*router.push('/')*/1
        )();
        getGroupInfo(group,setGName,setGVibe,setVibes);
    },2000);

    const [gVibe, setGVibe] = React.useState<string>("");
    const [gName, setGName] = React.useState<string>("");
    const [ritmikOpen, setRitmikOpen] = React.useState<boolean>(false);
    const [stickerOpen, setStickerOpen] = React.useState<boolean>(false);   
    const [vibes, setVibes] = React.useState<any>({ct:0,cool:0,sad:0});
    const [ritmikAnim, setRitmikAnim]= React.useState<boolean>(false);

    return (
    <Context value={{
        ritmikOpen, setRitmikOpen,
        gVibe, setGVibe,
        stickerOpen, setStickerOpen,
        vibes, setVibes,
        group, setGroup,
        user,
        messages, setMessages,
        ritmikAnim, setRitmikAnim
    }}>
    <RitmikModal/>
    <StickerModal/>
    <Grid 
        templateColumns={["40%", "1fr"]}
        templateRows={["72px", "1fr","50px"]}
        className={styles.grid}
    >
        <GroupBar/>
        {group !== "" ? <><GroupInfoBar color={"#33f03dff"} name={gName}/>
        <Chat/>
        <TextingBar/></> :
        <ChatBackdrop className={styles.fullwidth}/>}
    </Grid>
    </Context>)
}