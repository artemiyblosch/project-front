import React from "react";
import { Modal } from "../Modal/Modal";
import styles from './styles.module.scss'
import { Flex } from "../Flex";
import { CloseIcon, SliderIcon } from "@/assets";
import { Ritmik } from "../Ritmik/Ritmik";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { SliderModal } from "../SliderModal";

type _ = {
    isOpen : boolean;
    setIsOpen : React.Dispatch<boolean>;
    mvibe : string;
    vibes : any;
    group : string;
}

export const RitmikModal : React.FC<_> = ({
    isOpen, setIsOpen, mvibe, vibes, group
}) => {
    const [sliderModal, setSliderModal] = React.useState<boolean>(false)

    return <>
    <Modal isOpen={isOpen}>
        <Flex className={styles.main} align="stretch">
        <button 
            className={`${styles.button} ${styles.close}`}
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
                    className={styles.pbar}
                />
                <ProgressBar 
                    percentage={+vibes.cool}
                    text={`до смены облика: ${vibes[mvibe]+20-vibes.cool}`}
                    className={styles.pbar}
                />
                <ProgressBar 
                    percentage={+vibes.sad}
                    text={`до смены облика: ${vibes[mvibe]+20-vibes.sad}`}
                    className={styles.pbar}
                />
                <button 
                    onClick={()=>setSliderModal(true)}
                    className={styles.button}
                >
                    <SliderIcon/>
                </button>
            </Flex>
        </Flex>
    </Modal>
    <SliderModal 
        isOpen={sliderModal}
        setIsOpen={setSliderModal}
        group={group}
        vibes={vibes}
        setParentOpen={setIsOpen}
    />
    </>
}