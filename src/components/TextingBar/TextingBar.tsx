import Form from "next/form"
import styles from './styles.module.scss'
import { APIQuery } from "@/lib/forms";
import { APICall, textingCall } from "@/lib/calls";
import { updateMessages } from "@/lib/updateMessages";
import { useRouter } from "next/navigation";
import { TextingIcon } from "@/assets";

export type TextingBarProps = {
    group : string;
    user : any;
    setMessages : (a : any) => void;
}

export const TextingBar : React.FC<TextingBarProps> = ({
    group,
    user,
    setMessages
}) => {
    const router = useRouter();
    const text = new APIQuery(
        ["text"],
        textingCall as APICall
    )
    .addParams({
        group_pk: group,
        pk : user?.pk,
        password: user?.password
    })
    .addResponseTo(200,updateMessages(
        group,
        setMessages,
        () => router.push("/")
    ))
    .callable();


    return (
    <div className={styles.texting}>
        <Form 
            action={(formData) => formData.get("text") ? text(formData) : void 1} 
            id="Form"
            className={styles.form}
        >
            <input name="text" placeholder="Напишите сообщение..."/>
            <button type="submit" className={styles.destyle}><TextingIcon/></button>
        </Form>
    </div>
    )
}