import React from "react";
import { Flex } from "../Flex";
import { UserIcon } from "@/assets";
import styles from './styles.module.scss';
import { APICall, getGroups } from "@/lib/calls";
import { APIQuery } from "@/lib/forms";
import { getLocal } from "@/lib/localstorage";
import Link from "next/link";

export const GroupBar : React.FC = () => {
    const [groups,setGroups] = React.useState({});

    const getGs = new APIQuery(
        ["pk"],
        getGroups as APICall
    )
    .addResponseTo(200, (r) => {
        setGroups(JSON.parse(r));
    }).callable()

    const user = JSON.parse(getLocal("User"));
    React.useEffect(() => getGs({pk: user?.pk}),[]);

    return (
        <Flex 
            direction="column"
            gap="20px"
            className={styles.group}
        >
            <h1 className={styles.title}>Чаты</h1>
            {Object.values(groups).map((a : any) => (
            <Flex justifyContent="flex-start">
                <UserIcon color="#aa2daaff"/>
                <Link
                    className={styles.glink} 
                    href={`/group?gpk=${a?.pk}`}
                >{a?.name}</Link>
            </Flex>
            ))}
        </Flex>
    );
}