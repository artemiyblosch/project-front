import React, { useContext } from "react";
import { Flex } from "../Flex";
import { UserIcon } from "@/assets";
import styles from './styles.module.scss';
import { APICall, getGroups } from "@/lib/calls";
import { APIQuery } from "@/lib/forms";
import { Context } from "../Context";

export const GroupBar : React.FC = () => {
    const [groups,setGroups] = React.useState({});
    const {user, setGroup, group} = useContext(Context);

    const getGs = new APIQuery(
        ["pk"],
        getGroups as APICall
    )
    .addResponseTo(200, (r) => {
        setGroups(JSON.parse(r));
    }).callable()

    React.useEffect(() => getGs({pk: user?.pk}),[]);

    return (
        <Flex 
            direction="column"
            className={styles.groupBar}
        >
            <h1 className={styles.title}>Чаты</h1>
            {Object.values(groups).map((a : any) => (
                <div 
                    onClick={() => setGroup(a?.pk+"")}
                    className={`${styles.group} ${group == a?.pk && styles.chosen}`}
                >
                    <Flex justifyContent="flex-start">
                        <UserIcon color="#aa2daaff" className={styles.icon}/>
                        <span className={styles.glink}>{a?.name}</span>
                    </Flex>
                </div>
            ))}
        </Flex>
    );
}