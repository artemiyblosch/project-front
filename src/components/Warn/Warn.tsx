import React, { useContext, useEffect } from "react";
import { Context } from "../Context";
import styles from './styles.module.scss'
import { APIQuery } from "@/lib/forms";
import { APICall, unwarn } from "@/lib/calls";

export const Warn : React.FC = () => {
    const {user,warn,group} = useContext(Context);

    useEffect(() => {
        if(warn == 0) return;
        setTimeout(() => new APIQuery([],unwarn as APICall).addParams({
            pk: group,
            tag: user?.tag,
            password: user?.password,
        }).callable()({}), 10000);
    },[warn]);

    switch (warn) {
        case 1:
        return (
    <div className={styles.warn}>
        <span>
Ой-ой! 😱 Похоже на уловку мошенников!<br/>
Позови родителей! ❤️😊
        </span>
    </div>
        )
        case 2: 
        return (
    <div className={styles.warn}>
        <span>
Эй! Тут кто-то грубит! 👿<br/>
Позовём старших?<br/>
Вместе с родителями разберемся быстрее! 🛡️👨👩
        </span>
    </div>
        )
        default: return <></>
    }
}