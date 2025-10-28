import { UserIcon } from "@/assets"
import { Flex } from "../Flex"
import styles from './styles.module.scss'
import { APIQuery } from "@/lib/forms";
import { APICall, getGroup } from "@/lib/calls";
import React from "react";

type GIBProps = {
    color: string;
    group: string;
}

export const GroupInfoBar : React.FC<GIBProps> = ({
    color, group
}) => {
    'use client'
    const [groupName,setGName] = React.useState<string>("")

    const getGroupName = new APIQuery(
        ["pk"],
        getGroup as APICall
    )
    .addResponseTo(200, (r) => setGName(JSON.parse(r).name))
    .addResponseTo(404, () => alert("OKAK"))
    .addOnFailure(() => alert("???"))
    .callable();

    React.useEffect(() => getGroupName({pk: group}),[]);

    return (
    <Flex className={styles.bar}>
        <UserIcon color={color}/>
        <Flex direction="column">
            <span>{groupName}</span>
            <span>в сети</span>
        </Flex>
    </Flex>
    )
}