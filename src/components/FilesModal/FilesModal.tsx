import { useContext } from "react"
import { Modal } from "../Modal/Modal"
import { Context } from "../Context"
import { FileSystem } from "../Filesystem";
import { CloseIcon } from "@/assets";

import styles from './styles.module.scss'

export const FilesModal : React.FC = () => {
    const {filesModalOpen: isOpen, setFilesModalOpen: setOpen} = useContext(Context);
    return (
    <Modal isOpen={isOpen}>
        <button 
            className={`${styles.button} ${styles.close}`}
            onClick={()=>{setOpen(false)}}
        >
            <CloseIcon/>
        </button>
        <FileSystem/>
    </Modal>
    )
}