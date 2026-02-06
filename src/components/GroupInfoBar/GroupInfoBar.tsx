import { ComeBackIcon, UserIcon } from "@/assets"
import { Flex } from "../Flex"
import styles from './styles.module.scss'
import React, { useContext } from "react";
import Link from "next/link";
import { Context } from "../Context";

type GIBProps = {
    color: string;
    name: string;
}

export const GroupInfoBar : React.FC<GIBProps> = ({
    color, name
}) => {
    'use client'
    const {setFilesModalOpen} = useContext(Context);
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
            <span className={styles.gtitle}>{name}</span>
            <span className={styles.gstat}>в сети</span>
        </Flex>
        <button onClick={()=>setFilesModalOpen(true)}>
            Файлы
        </button>
    </Flex>
    )
}