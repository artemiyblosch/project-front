import React from "react";
import { Modal } from "../Modal/Modal";
import styles from './styles.module.scss'
import { Flex } from "../Flex";
import { AddStickerIcon, CloseIcon } from "@/assets";
import { Grid } from "../Grid";
import { APIQuery } from "@/lib/forms";
import { APICall, getStickers, textingCall } from "@/lib/calls";
import { getLocal } from "@/lib/localstorage";
import { AddStickerModal } from "../AddStickerModal/AddStickerModal";

type _ = {
    isOpen : boolean;
    setIsOpen : React.Dispatch<boolean>;
    group : string;
}

export const StickerModal : React.FC<_> = ({
    isOpen, setIsOpen, group,
}) => {

    const [stickers,setStickers] = React.useState<any>();

    const user = JSON.parse(getLocal("User"));

    const [addStickerOpen, setAddStickerOpen] = React.useState<boolean>(false);  
    const getSt = new APIQuery([],getStickers as APICall)
    .addResponseTo(200,(r)=>setStickers(JSON.parse(r)))
    .callable();

    const sendSticker = (s : string) => (
        new APIQuery([],textingCall as APICall)
        .addParams({
            type: 2, 
            pk: user?.pk, 
            text: s, 
            password: user?.password,
            group_pk: group,
        })
        .addResponseTo(200,()=>getSt({}))
        .callable()({})
    )
    React.useEffect(()=>getSt({}),[]);
    return (<>
    <Modal isOpen={isOpen}>
        <Flex direction="column" className={styles.main} align="stretch">
        <button 
            className={`${styles.button} ${styles.close}`}
            onClick={()=>{setIsOpen(false)}}
        >
            <CloseIcon/>
        </button>
            <label>❤️</label>
            <Grid 
                templateColumns={["repeat(60px,6)"]}
                templateRows={[]}
                gap="10px"
            >
                {stickers
                ?.filter((s : any)=>s?.vibe === "ct")
                .map((s : any) => <button onClick={() => sendSticker(s?.pk)}>
                    <img alt="" src={s?.image}/>
                </button>)}
            </Grid>
            <label>😎</label>
            <Grid 
                templateColumns={["repeat(60px,6)"]}
                templateRows={[]}
                gap="10px"
            >
                {stickers
                ?.filter((s : any)=>s?.vibe === "cool")
                .map((s : any) => <button onClick={() => sendSticker(s?.pk)}>
                    <img alt="" src={s?.image}/>
                </button>)}
            </Grid>
            <label>😭</label>
            <Grid 
                templateColumns={["repeat(60px,6)"]}
                templateRows={[]}
                gap="10px"
            >
                {stickers
                ?.filter((s : any)=>s?.vibe === "sad")
                .map((s : any) => <button onClick={() => sendSticker(s?.pk)}>
                    <img alt="" src={s?.image}/>
                </button>)}
            </Grid>
            <button onClick={() => setAddStickerOpen(true)}><AddStickerIcon/></button>
        </Flex>
    </Modal>
    <AddStickerModal
        setIsOpen={setAddStickerOpen}
        isOpen={addStickerOpen}
        setParentOpen={setIsOpen}
    /></>)
}