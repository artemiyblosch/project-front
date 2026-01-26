import Form from "next/form"
import styles from './styles.module.scss'
import { APIQuery } from "@/lib/forms";
import { APICall, textingCall } from "@/lib/calls";
import { updateMessages } from "@/lib/updateMessages";
//import { useRouter } from "next/navigation";
import { MicrophoneIcon, StickerIcon, TextingIcon } from "@/assets";
import { useContext, } from "react";
import { Context } from "../Context";
//import { Flex } from "../Flex";
import { Grid } from "../Grid";
import { useRecorder } from "react-microphone-recorder";

export const TextingBar : React.FC = () => {
    //const router = useRouter();
    const { group, user, setMessages, setStickerOpen } = useContext(Context);
    const {isRecording, startRecording, stopRecording, audioURL, recordingState} = useRecorder();


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

    const voiceMessage = () => {
        if(!isRecording) startRecording();

    }

    return (
    <div className={styles.texting}>
        <Form 
            action={(formData) => formData.get("text") ? text(formData) : voiceMessage()} 
            id="Form"
            className={styles.form}
        >
            <Grid templateRows={["1fr"]} templateColumns={["1fr", "75px", "75px", '25px']}>
                <input name="text" id="text" placeholder="Напишите сообщение..."/>
                <button type="button"
                    className={`${styles.destyle}`}
                    onClick={()=>setStickerOpen(true)}
                ><StickerIcon/></button>

                <button 
                    type={isRecording ? "button" : "submit"}
                    onClick={()=>{stopRecording();alert(audioURL)}}
                    className={`${styles.destyle} ${isRecording ? styles.on : ""}`}
                >
                {(document.getElementById("text") as HTMLInputElement)?.value != "" ? <TextingIcon/> : <MicrophoneIcon/>}
                </button>
                {recordingState}
            </Grid>
        </Form>
        
    </div>
    )
}