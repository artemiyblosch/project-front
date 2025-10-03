import { Flex } from "@/components";
import { RequireAuth } from "@/components/RequireAuth";
import { APICall, getGroups } from "@/lib/calls";
import { APIQuery } from "@/lib/forms";
import { getLocal } from "@/lib/localstorage";
import Link from "next/link";
import React from "react";


export default function Page() {
    'use client';
    const [groups,setGroups] = React.useState({});

    const getGs = new APIQuery(
        ["pk"],
        getGroups as APICall
    )
    .addResponseTo(200, (r) => {
        setGroups(JSON.parse(r));
    }).callable()

    const user = JSON.parse(getLocal("User"));
    React.useEffect(()=> getGs({pk: user?.pk}),[]);

    return <RequireAuth>
        <Flex direction="column" gap="20px">
            {Object.values(groups).map((a : any) => <div>
                <h2>{a?.name ?? "??"}</h2>
                <Link href={`/group?gpk=${a?.pk}`}>write</Link>
            </div>)}
        </Flex>
    </RequireAuth>
}