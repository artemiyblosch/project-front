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
        {!vibes ? <p>М</p> : (vibes === 1 ? <p>К</p> : <p>О</p>)}
    </div>
}