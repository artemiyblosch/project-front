import React from "react";
import { Flex } from "../Flex";
import { UserIcon } from "@/assets/icons/UserIcon";
import styles from './styles.module.scss';

export const GroupBar : React.FC = () => {
    return (
    <div className={styles.bar}>
        <h1 className={styles.title}>Чаты</h1>
        <Flex gap="10px">
            <UserIcon color="#aa2daaff"/>
        </Flex>
    </div>
    );
}