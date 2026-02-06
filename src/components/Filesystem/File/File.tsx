import { Context } from "@/components/Context";
import { APICall, getFile } from "@/lib/calls";
import { APIQuery } from "@/lib/forms";
import { useContext } from "react";

type FileProps = {path: string, name: string};

export const File : React.FC<FileProps> = ({path,name}) => {
    const {group: group_pk, user} = useContext(Context);
    const loadFile = new APIQuery(
        [],
        getFile as APICall
    )
    .addParams({
        group_pk,
        pk: user?.pk,
        password: user?.password,
        path,
    })
    .addResponseTo(200,(response) => {
        alert(response);
    }).callable();

    return (
    <div onClick={()=>loadFile({})}>
        <image href="/file.png"/>
        <span>{name}</span>
    </div>
    );
}