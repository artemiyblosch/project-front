import Form from "next/form"
import styles from './styles.module.scss'
import { APIQuery } from "@/lib/forms";
import { APICall, textingCall } from "@/lib/calls";
import { updateMessages } from "@/lib/updateMessages";
//import { useRouter } from "next/navigation";
import { MicrophoneIcon, StickerIcon, TextingIcon } from "@/assets";
import { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
//import { Flex } from "../Flex";
import { Grid } from "../Grid";
import { useRecorder } from "react-microphone-recorder";

export const TextingBar : React.FC = () => {
    //const router = useRouter();
    const { group, user, setMessages, setStickerOpen } = useContext(Context);
    const { isRecording, startRecording, stopRecording, audioURL, audioBlob } = useRecorder();
    const [isVm, setIsVm] = useState(false);

    const textAPI = (type : number) => new APIQuery(
        ["text"],
        textingCall as APICall
    )
    .addParams({
        group_pk: group,
        pk : user?.pk,
        password: user?.password,
        type,
        vibe : /*+!text.get("text") ? "cool" : */"",
    })
    .addResponseTo(200,updateMessages(
        group,
        setMessages,
        () => /*router.push("/")*/1
    ));

    const text = textAPI(0).callable();
    const vmSend = textAPI(1).callable();

    useEffect(() => {
        if(isVm && !isRecording) {
            startRecording();
            return;
        }
        if (!isVm) {
            stopRecording();
            if (!isRecording && audioBlob && audioURL != "") {
                const reader = new FileReader()
                reader.onload = function(event) {
                    const url = event.target?.result;
                    vmSend({text: url});
                }
                reader.readAsDataURL(audioBlob);
            }
        }
    },[audioURL,isVm]);

    return (
    <div className={styles.texting}>
        <Form 
            action={(formData) => formData.get("text") ? text(formData) : setIsVm((isvm)=>!isvm)} 
            id="Form"
            className={styles.form}
        >
            <Grid templateRows={["1fr"]} templateColumns={["1fr", "75px", "75px", '25px']}>
                <input name="text" id="text" placeholder="Напишите сообщение..."/>
                <button type="button"
                    className={styles.destyle}
                    onClick={()=>setStickerOpen(true)}
                ><StickerIcon/></button>

                {(document.getElementById('text') as HTMLInputElement)?.value == "" ? 
                <button 
                    className={`${styles.destyle} ${isRecording ? styles.on : ""}`}
                    type="submit"
                >
                    <MicrophoneIcon/>
                </button> : 
                <button
                    className={styles.destyle}
                    type="submit"
                >
                    <TextingIcon/>
                </button>}
            </Grid>
        </Form>
        
    </div>
    )
}