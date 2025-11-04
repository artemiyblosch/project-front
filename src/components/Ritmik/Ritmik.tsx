import { RitmikCool, RitmikCt, RitmikNA, RitmikSad } from '@/assets/ritmik';
import styles from './styles.module.scss'

type RitmikProps = {
    className ?: string;
    vibes : number;
}

export const Ritmik : React.FC<RitmikProps> = ({
    className,
    vibes
}) => {
    return <div className={`${className} ${styles.ritmik}`}>
        {!vibes ? <RitmikCt/>
        : (vibes === 1 ? <RitmikCool/>
        : (vibes === 2 ? <RitmikSad/>
        : <RitmikNA/> ))}
    </div>
}