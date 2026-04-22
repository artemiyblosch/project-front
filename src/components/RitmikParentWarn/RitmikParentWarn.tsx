import { RitmikNA } from "@/assets/ritmik"
import styles from './styles.module.scss'
import { useContext, useEffect, useState } from "react"
import { Context } from "../Context"
import { APICall, unwarn_parent } from "@/lib/calls"
import { APIQuery } from "@/lib/forms"

export const RitmikParentWarn = () => {
    'use client'
    const {user} = useContext(Context);

    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
        user.kid_warn = null;

        setTimeout(() => new APIQuery([],unwarn_parent as APICall).addParams({
            pk: user?.pk
        }).callable()({}), 10000);

    }, [])
    if (!(isClient && user?.kid_warn)) return <></>
    return <>
    <div className={styles.ritmik}>
        <RitmikNA/>
    </div>
    <div className={styles.warn}>
        <span>
            ❗Заметил подозрительную активность у<br/>
            Вашего ребенка в чате с {user.kid_warn}❗<br/>
            Обсудите это с ним 🤗
        </span>
    </div>
    </>
}