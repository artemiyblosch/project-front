import { RitmikCool, RitmikCt, RitmikNA, RitmikSad } from '@/assets/ritmik';
import { useContext } from 'react';
import { Context } from '../Context';

export const Ritmik : React.FC<{className : string}> = ({
    className,
}) => {
    const {gVibe: vibes, setRitmikOpen} = useContext(Context)

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