import { RitmikCool, RitmikCt, RitmikNA, RitmikSad } from '@/assets/ritmik';
import { useContext } from 'react';
import { Context } from '../Context';
import { RitmikAnim } from '@/assets/ritmik/anims';

export const Ritmik : React.FC<{className : string}> = ({
    className,
}) => {
    const {gVibe: vibes, setRitmikOpen, ritmikAnim} = useContext(Context)
    if (ritmikAnim) {

        return <div 
        className={className}
        onClick={()=>setRitmikOpen(true)}
    >
        <RitmikAnim/>
    </div>
    }
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