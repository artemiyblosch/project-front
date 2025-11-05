import { RitmikCool, RitmikCt, RitmikNA, RitmikSad } from '@/assets/ritmik';

type RitmikProps = {
    className ?: string;
    vibes : string;
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
        {vibes === "ct" ? <RitmikCt/>
        : (vibes === "cool" ? <RitmikCool/>
        : (vibes === "sad" ? <RitmikSad/>
        : <RitmikNA/> ))}
    </div>)
}