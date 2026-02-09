import { CloseIcon } from "@/assets";
import styles from './styles.module.scss'
import { Modal } from "../Modal/Modal";
import Form from "next/form";
import { APIQuery } from "@/lib/forms";
import { addSticker, APICall } from "@/lib/calls";
import { readSyncDataURL } from "@/lib/b64";
import { Flex } from "../Flex";
import React from "react";
import { Grid } from "../Grid";

type _ = {
    isOpen : boolean;
    setIsOpen : React.Dispatch<boolean>;
    setParentOpen : React.Dispatch<boolean>;
    getStickers : (a: any)=>void;
}

export const AddStickerModal : React.FC<_> = ({
    isOpen, setIsOpen, setParentOpen, getStickers
}) => {
    const addSt = (formData : FormData) => new APIQuery(
        [],
        addSticker as APICall
    )
    .addParams({
        image: readSyncDataURL(formData?.get("image")),
        vibe
    })
    .addResponseTo(200,() => {
        setIsOpen(false);
        setParentOpen(false);
    }).callable()({});

    const [vibe, setVibe] = React.useState<string>("ct");

    return <Modal isOpen={isOpen}>
        <Form action={(f)=>{addSt(f);setIsOpen(false);setParentOpen(false);getStickers({})}} className={styles.radio}>
        <Flex className={styles.main} align="center" direction="column" gap="20px" justifyContent="center">
        <button 
            type="button"
            className={`${styles.button} ${styles.close}`}
            onClick={()=>{setIsOpen(false)}}
        >
            <CloseIcon/>
        </button>
        <input name="image" type="file"/>
        <Grid templateColumns={["40px","auto"]} templateRows={[]} gap="10px">
            <label className={styles.label}>❤️</label>
            <input type="radio" onChange={()=>setVibe("ct")} name="vibe" checked={vibe === "ct"} />
            <label className={styles.label}>😎</label>
            <input type="radio" onChange={()=>setVibe("cool")} name="vibe" checked={vibe === "cool"} />
            <label className={styles.label}>😭</label>
            <input type="radio" onChange={()=>setVibe("sad")} name="vibe" checked={vibe === "sad"} />
        </Grid>
        <button type="submit" className={styles.confirm}>Отправить</button>
        </Flex>
        </Form>
    </Modal>
}