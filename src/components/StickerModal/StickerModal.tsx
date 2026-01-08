import React, { useContext } from "react";
import { Modal } from "../Modal/Modal";
import styles from './styles.module.scss'
import { Flex } from "../Flex";
import { AddStickerIcon, CloseIcon } from "@/assets";
import { Grid } from "../Grid";
import { APIQuery } from "@/lib/forms";
import { APICall, getStickers, textingCall } from "@/lib/calls";
import { AddStickerModal } from "../AddStickerModal/AddStickerModal";
import { Context } from "../Context";

export const StickerModal : React.FC = () => {
    const [stickers,setStickers] = React.useState<any>();
    const [addStickerOpen, setAddStickerOpen] = React.useState<boolean>(false);
    const {user, group,
           stickerOpen : isOpen,
           setStickerOpen : setIsOpen} = useContext(Context)

    const getSt = new APIQuery([],getStickers as APICall)
    .addResponseTo(200,(r)=>setStickers(JSON.parse(r)))
    .callable();

    const sendSticker = (s : string) => {
        new APIQuery([],textingCall as APICall)
        .addParams({
            type: 2, 
            pk: user?.pk, 
            text: s, 
            password: user?.password,
            group_pk: group,
        })
        .addResponseTo(200,()=>getSt({}))
        .callable()({});
        setIsOpen(false);
    }
    React.useEffect(()=>getSt({}),[isOpen]);
    return (<>
    <Modal isOpen={isOpen}>
        <Flex direction="column" className={styles.main} align="stretch" gap={"10px"}>
        <button 
            className={`${styles.button} ${styles.close}`}
            onClick={()=>{setIsOpen(false)}}
        >
            <CloseIcon/>
        </button>
            <label className={styles.label}>❤️</label>
            <Grid 
                templateColumns={["150px","150px","150px","150px","150px"]}
                templateRows={[]}
                gap="10px"
            >
                {stickers
                ?.filter((s : any)=>s?.vibe === "ct")
                .map((s : any) => <button 
                    onClick={() => sendSticker(s?.pk)} 
                    className={`${styles.sticker} ${styles.button}`}
                >
                    <img alt="" src={s?.image} />
                </button>)}
            </Grid>
            <label className={styles.label}>😎</label>
            <Grid 
                templateColumns={["150px","150px","150px","150px","150px"]}
                templateRows={[]}
                gap="10px"
            >
                {stickers
                ?.filter((s : any)=>s?.vibe === "cool")
                .map((s : any) => <button 
                    onClick={() => sendSticker(s?.pk)}
                    className={`${styles.sticker} ${styles.button}`}
                >
                    <img alt="" src={s?.image}/>
                </button>)}
            </Grid>
            <label className={styles.label}>😭</label>
            <Grid 
                templateColumns={["150px","150px","150px","150px","150px"]}
                templateRows={[]}
                gap="10px"
            >
                {stickers
                ?.filter((s : any)=>s?.vibe === "sad")
                .map((s : any) => <button 
                    onClick={() => sendSticker(s?.pk)}
                    className={`${styles.sticker} ${styles.button}`}
                >
                    <img alt="" src={s?.image}/>
                </button>)}
            </Grid>
            <button 
                onClick={() => setAddStickerOpen(true)}
                className={styles.button}
            ><AddStickerIcon/></button>
        </Flex>
    </Modal>
    <AddStickerModal
        setIsOpen={setAddStickerOpen}
        isOpen={addStickerOpen}
        setParentOpen={setIsOpen}
        getStickers={getSt}
    /></>)
}