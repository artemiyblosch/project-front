import { ComeBackIcon, UserIcon } from "@/assets"
import { Flex } from "../Flex"
import styles from './styles.module.scss'
import { APIQuery } from "@/lib/forms";
import { APICall, getGroup } from "@/lib/calls";
import React from "react";
import Link from "next/link";

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
    .addOnFailure((e) => alert(`???: ${e}`))
    .callable();

    React.useEffect(() => getGroupName({pk: group}),[]);

    return (
    <Flex
        gap="10px"
        align="center"
        className={styles.bar}
    >
        <Link 
            href="/" 
            className={styles.comebackLink}
        >
            <ComeBackIcon/>
        </Link>
        <UserIcon color={color} className={styles.icon}/>
        <Flex direction="column">
            <span className={styles.gtitle}>{groupName}</span>
            <span className={styles.gstat}>в сети</span>
        </Flex>
    </Flex>
    )
}