import React from "react";
import { Modal } from "../Modal/Modal";
import styles from './styles.module.scss'
import { Flex } from "../Flex";
import { CloseIcon } from "@/assets";
import { Ritmik } from "../Ritmik/Ritmik";
import { ProgressBar } from "../ProgressBar/ProgressBar";

type _ = {
    isOpen : boolean;
    setIsOpen : React.Dispatch<boolean>;
    mvibe : string;
    vibes : any;
}

export const RitmikModal : React.FC<_> = ({
    isOpen, setIsOpen, mvibe, vibes
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
                    vibes={mvibe}
                    className={styles.ritmik}
                />
            </Flex>
            <Flex 
                direction="column"
                align="center"
            >
                <ProgressBar 
                    percentage={+vibes.ct}
                    text={`до смены облика: ${vibes[mvibe]+20-vibes.ct}`}
                />
                <ProgressBar 
                    percentage={+vibes.cool}
                    text={`до смены облика: ${vibes[mvibe]+20-vibes.cool}`}
                />
                <ProgressBar 
                    percentage={+vibes.sad}
                    text={`до смены облика: ${vibes[mvibe]+20-vibes.sad}`}
                />
            </Flex>
        </Flex>
    </Modal>
}