import { Flex } from "@/components";
import { APICall, getMessages, textingCall } from "@/lib/calls";
import { APIQuery } from "@/lib/forms";
import { getLocal } from "@/lib/localstorage";
import Form from "next/form";
import { redirect, useSearchParams } from "next/navigation"
import React from "react";
import styles from './group.module.scss'

export default function Page() {
    'use client'
    const searchParams = useSearchParams();
    const group = searchParams?.get("gpk");
    const [messages,setMessages] = React.useState<any>([]);
    
    const user = JSON.parse(getLocal("User"));

    const getBack = () => redirect('/');
    const updateMessages = () => {
        new APIQuery(["group"],getMessages as APICall)
        .addOnFailure(getBack)
        .addResponseTo(404, getBack)
        .addResponseTo(200, (res) => {
            setMessages(JSON.parse(res));
        })
        .callable()({group: group})
    }
    React.useEffect(() => {
        setInterval(updateMessages,10000);
    }, [group])

    const text = new APIQuery(
        ["text"],
        textingCall as APICall
    )
    .addParams({
        group_pk: group,
        pk : user?.pk,
        password: user?.password
    })
    .addResponseTo(200,updateMessages)
    .callable();

    return (
    <><Flex direction="column">
        {messages.map((m : any) => {
            return <div>
                <h5>{m?.owner?.name}</h5>
                <p>{m?.text}</p>

            </div>
        })}
    </Flex>
    <div className={styles.texting}>
    <Form 
        action={(formData) => text(formData)} 
        id="Form"
    >
        <input name="text"/>
        <button type="submit">Text</button>
    </Form>
    </div>
    </>)
}