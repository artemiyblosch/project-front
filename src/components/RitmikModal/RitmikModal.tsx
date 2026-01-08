import React, { useContext } from "react";
import { Modal } from "../Modal/Modal";
import styles from './styles.module.scss'
import { Flex } from "../Flex";
import { CloseIcon, SliderIcon } from "@/assets";
import { Ritmik } from "../Ritmik/Ritmik";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { SliderModal } from "../SliderModal";
import { Grid } from "../Grid";
import { Context } from "../Context";

export const RitmikModal : React.FC = () => {
    const [sliderModal, setSliderModal] = React.useState<boolean>(false)

    const {ritmikOpen : isOpen, setRitmikOpen : setIsOpen, 
           gVibe : mvibe, vibes} = useContext(Context);
        
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
                    className={styles.ritmik}
                />
            </Flex>
            <Grid
                templateColumns={["10px", "1fr"]}
                templateRows={["10px", "10px", "10px"]}
                className={styles.pcont}
                gap={"60px"}
            >
                <label>❤️</label>
                <ProgressBar 
                    percentage={mvibe === "ct" ? 100 : vibes.ct/(vibes[mvibe]+20)*100}
                    text={mvibe !== "ct" ? 
                        `до смены облика: ${vibes[mvibe]+20-vibes.ct}` : 
                        "max"}
                    className={`${styles.pbar} ${mvibe === "ct" && styles.maxbar}`}
                />
                <label>😎</label>
                <ProgressBar 
                    percentage={mvibe === "cool" ? 100 : vibes.cool/(vibes[mvibe]+20)*100}
                    text={mvibe !== "cool" ? 
                        `до смены облика: ${vibes[mvibe]+20-vibes.cool}` :
                        "max"}
                    className={`${styles.pbar} ${mvibe === "cool" ? styles.maxbar : ""}`}
                />
                <label>😭</label>
                <ProgressBar 
                    percentage={mvibe === "sad" ? 100 : vibes.sad/(vibes[mvibe]+20)*100}
                    text={mvibe !== "sad" ? 
                        `до смены облика: ${vibes[mvibe]+20-vibes.sad}` :
                        "max"}
                    className={`${styles.pbar} ${mvibe === "sad" && styles.maxbar}`}
                />
                <button 
                    onClick={()=>setSliderModal(true)}
                    className={styles.button}
                >
                    <SliderIcon/>
                </button>
            </Grid>
        </Flex>
    </Modal>
    <SliderModal isOpen={sliderModal} setIsOpen={setSliderModal}/>
    </>
}