import { redirect } from "next/navigation";
import { APICall, getMessages } from "./calls";
import { APIQuery } from "./forms";

const getBack = () => redirect('/');

export const updateMessages = (
    group : string,
    setMessages : (a : any) => void,
) => {
    return () => new APIQuery(
        ["group"],
        getMessages as APICall
    )
    .addOnFailure(getBack)
    .addResponseTo(404, getBack)
    .addResponseTo(200, (res) => {
        setMessages(JSON.parse(res));
    })
    .callable()({group: group})
}