import { CloseIcon } from "@/assets";
import styles from './styles.module.scss'
import { Modal } from "../Modal/Modal";
import Form from "next/form";
import { APIQuery } from "@/lib/forms";
import { addSticker, APICall } from "@/lib/calls";
import { readSyncDataURL } from "@/lib/b64";

type _ = {
    isOpen : boolean;
    setIsOpen : React.Dispatch<boolean>;
    setParentOpen : React.Dispatch<boolean>;
}

export const AddStickerModal : React.FC<_> = ({
    isOpen, setIsOpen, setParentOpen
}) => {
    const addSt = (formData : FormData) => new APIQuery(
        ["vibe"],
        addSticker as APICall
    )
    .addParams({
        image: readSyncDataURL(formData?.get("image"))
    })
    .addResponseTo(200,() => {
        setIsOpen(false);
        setParentOpen(false);
    }).callable()(formData);

    return <Modal isOpen={isOpen}>
        <button 
            className={`${styles.button} ${styles.close}`}
            onClick={()=>{setIsOpen(false)}}
        >
            <CloseIcon/>
        </button>
        <Form action={addSt}>
            <input name="image" type="file"/>
            <input type="radio" name="vibe" value="ct" checked />
            <input type="radio" name="vibe" value="cool"/>
            <input type="radio" name="vibe" value="sad"/>
            <button type="submit">Отправить</button>
        </Form>
    </Modal>
}