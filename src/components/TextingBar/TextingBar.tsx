import Form from "next/form"
import styles from './styles.module.scss'
import { APIQuery } from "@/lib/forms";
import { APICall, textingCall } from "@/lib/calls";
import { updateMessages } from "@/lib/updateMessages";
//import { useRouter } from "next/navigation";
import { StickerIcon, TextingIcon } from "@/assets";
import { useContext } from "react";
import { Context } from "../Context";

export const TextingBar : React.FC = () => {
    //const router = useRouter();
    const { group, user, setMessages, setStickerOpen } = useContext(Context);

    const text = (text : FormData) => new APIQuery(
        ["text"],
        textingCall as APICall
    )
    .addParams({
        group_pk: group,
        pk : user?.pk,
        password: user?.password,
        type : +!text.get("text"),
        vibe : /*+!text.get("text") ? "cool" : */"",
    })
    .addResponseTo(200,updateMessages(
        group,
        setMessages,
        () => /*router.push("/")*/1
    ))
    .callable()(text);


    return (
    <div className={styles.texting}>
        <Form 
            action={(formData) => formData.get("text") ? text(formData) : text(formData)} 
            id="Form"
            className={styles.form}
        >
            <input name="text" placeholder="Напишите сообщение..."/>
            <button 
                type="submit" 
                className={`${styles.destyle} ${styles.textBt}`}
            ><TextingIcon/></button>
            <button type="button"
                className={`${styles.destyle} ${styles.stickerBt}`} 
                onClick={()=>setStickerOpen(true)}
            ><StickerIcon/></button>
        </Form>
        
    </div>
    )
}