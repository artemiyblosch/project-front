import React, { useContext } from "react"
import { Modal } from "../Modal/Modal";
import { CloseIcon } from "@/assets";
import styles from './styles.module.scss'
import { APIQuery } from "@/lib/forms";
import { APICall, setVibes } from "@/lib/calls";
import Form from "next/form";
import { Grid } from "../Grid";
import { Context } from "../Context";

type SliderModalProps = {
    isOpen : boolean;
    setIsOpen : React.Dispatch<boolean>;
}

export const SliderModal : React.FC<SliderModalProps> = ({
    isOpen, setIsOpen
}) => {
    const {group, setRitmikOpen : setParentOpen} = useContext(Context)
    const setVibes_ = new APIQuery(
        ["ct","cool","sad"],
        setVibes as APICall
    ).addParams(
        {pk: +group}
    ).addResponseTo(200, () => 1)
    .callable(); // действие отправки введённых данных на сервер

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
            }} className={styles.form}>
                <Grid 
                    templateColumns={["auto","80%"]}
                    templateRows={["60px","60px","60px"]}
                    className={styles.grid}
                >
                    <label>❤️</label>
                    <input type="range" name="ct" min="0" max="100"/>
                    <label>😎</label>
                    <input type="range" name="cool" min="0" max="100"/>
                    <label>😭</label>
                    <input type="range" name="sad" min="0" max="100"/>
                </Grid>
                <input type="submit" value="Подтвердить"/>
            </Form>
        </div>
    </Modal>
}