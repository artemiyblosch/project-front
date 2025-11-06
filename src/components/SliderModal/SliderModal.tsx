import React from "react"
import { Modal } from "../Modal/Modal";
import { CloseIcon } from "@/assets";
import styles from './styles.module.scss'
import { APIQuery } from "@/lib/forms";
import { APICall, setVibes } from "@/lib/calls";
import Form from "next/form";

type _ = {
    isOpen : boolean;
    setIsOpen : React.Dispatch<boolean>;
    setParentOpen : React.Dispatch<boolean>;
    group : string;
    vibes : any;
}

export const SliderModal : React.FC<_> = ({
    isOpen, setIsOpen, group, setParentOpen
}) => {
    const setVibes_ = new APIQuery(
        ["ct","cool","sad"],
        setVibes as APICall
    ).addParams(
        {pk: +group}
    ).addResponseTo(200, () => 1)
    .callable();

    return <Modal isOpen={isOpen}>
        <div className={styles.main}>
        <button 
            className={styles.close} 
            onClick={() => setIsOpen(false)}
        >
            <CloseIcon/>
        </button>
            <Form action={(FD)=>{
                setVibes_(FD);
                setIsOpen(false);
                setParentOpen(false);
            }}>
                <input type="range" name="ct" min="0" max="100"/>
                <input type="range" name="cool" min="0" max="100"/>
                <input type="range" name="sad" min="0" max="100"/>
                <input type="submit"/>
            </Form>
        </div>
    </Modal>
}