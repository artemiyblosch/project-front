import React from "react";
import { Modal } from "../Modal/Modal";
import styles from './styles.module.scss'
import { Flex } from "../Flex";
import { CloseIcon } from "@/assets";

type _ = {
    isOpen : boolean;
    setIsOpen : React.Dispatch<boolean>;
}

export const RitmikModal : React.FC<_> = ({
    isOpen, setIsOpen
}) => {
    return <Modal isOpen={isOpen}>
        <Flex className={styles.main} align="stretch">
        <button 
            className={styles.close}
            onClick={()=>{setIsOpen(false)}}
        >
            <CloseIcon/>
        </button>
            <Flex 
                direction="column" 
                align="center"
                className={styles.ritmikSidebar}
            >

            </Flex>
        </Flex>
    </Modal>
}