import { RitmikCool, RitmikCt, RitmikNA, RitmikSad } from '@/assets/ritmik';

type RitmikProps = {
    className ?: string;
    vibes : number;
    setRitmikOpen : React.Dispatch<boolean>;
}

export const Ritmik : React.FC<RitmikProps> = ({
    className,
    vibes,
    setRitmikOpen
}) => {
    return (
    <div 
        className={className}
        onClick={()=>setRitmikOpen(true)}
    >
        {!vibes ? <RitmikCt/>
        : (vibes === 1 ? <RitmikCool/>
        : (vibes === 2 ? <RitmikSad/>
        : <RitmikNA/> ))}
    </div>)
}