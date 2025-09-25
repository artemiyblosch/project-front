import { Flex } from "@/components";
import { RequireAuth } from "@/components/RequireAuth";
import { APICall, getGroups } from "@/lib/calls";
import { APICallFromForm } from "@/lib/forms";
import { getLocal } from "@/lib/localstorage";
import React from "react";


export default function Page() {
    'use client';
    const [groups,setGroups] = React.useState({});

    const getGs = new APICallFromForm(
        ["pk"],
        getGroups as APICall
    )
    .addResponseTo(200, (r) => {
        setGroups(JSON.parse(r));
    }).callable()

    const user = JSON.parse(getLocal("User"));
    React.useEffect(()=> getGs({pk: user?.pk}),[]);//eslint-disable-line

    return <RequireAuth>
        <Flex direction="column" gap="20px">
            {Object.values(groups).map((a : any/*eslint-disable-line*/) => <div key={1}>
                <h2>{a?.name ?? "??"}</h2>
            </div>)}
        </Flex>
    </RequireAuth>
}