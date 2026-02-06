import { Context } from "@/components/Context"
import { APICall, getTree } from "@/lib/calls";
import { APIQuery } from "@/lib/forms";
import React, { useContext, useState } from "react"
import { Directory } from "../Directory/Directory";

export const FileSystem : React.FC = () => {
    const {group: group_pk, user} = useContext(Context);
    const [restTree,setRestTree] = useState<any>([[],{}]);

    const getTree_ = new APIQuery(
        [],
        getTree as APICall
    )
    .addParams({
        group_pk,
        pk: user?.pk,
        password: user?.password,
    })
    .addResponseTo(200,(response) => {
        setRestTree(JSON.parse(response));
    }).callable();
    React.useEffect(()=>getTree_({}),[]);

    return <>{Object.keys(restTree[1][group_pk]).map((e)=><Directory name="" path="" rest_tree={restTree[1][group_pk][e]}/>)}</>;
}