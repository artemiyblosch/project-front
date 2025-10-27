import { UserIcon } from "@/assets"
import { Flex } from "../Flex"
import styles from './styles.module.scss'

type GIBProps = {
    color: string;
    group: string;
}

export const GroupInfoBar : React.FC<GIBProps> = ({
    color, group
}) => {
    return (
    <Flex className={styles.bar}>
        <UserIcon color={color}/>
        <Flex direction="column">
            <span>{group}</span>
            <span>в сети</span>
        </Flex>
    </Flex>
    )
}