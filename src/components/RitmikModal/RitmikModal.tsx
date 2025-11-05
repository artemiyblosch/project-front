import React from "react";
import { Modal } from "../Modal/Modal";
import styles from './styles.module.scss'
import { Flex } from "../Flex";
import { CloseIcon } from "@/assets";
import { Ritmik } from "../Ritmik/Ritmik";

type _ = {
    isOpen : boolean;
    setIsOpen : React.Dispatch<boolean>;
    vibes : string;
}

export const RitmikModal : React.FC<_> = ({
    isOpen, setIsOpen, vibes
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
                <Ritmik 
                    setRitmikOpen={()=>1}
                    vibes={vibes}
                    className={styles.ritmik}
                />
            </Flex>
            <Flex 
                direction="column"
                align="center"
            >

            </Flex>
        </Flex>
    </Modal>
}