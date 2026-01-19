import { RitmikCool, RitmikCt, RitmikNA, RitmikSad } from '@/assets/ritmik';
import { useContext } from 'react';
import { Context } from '../Context';

export const Ritmik : React.FC<{className : string}> = ({
    className,
}) => {
    const {gVibe: vibes, setRitmikOpen, ritmikAnim : anim} = useContext(Context)
    if (anim) {
        const video = <video width="347" height="257" autoPlay onLoadedData={() => {}}>
            <source src={
                `/${vibes === "ct" ? "ctanim.mp4" :
                    (vibes === "cool" ? "coolanim.mp4" : "sadanim.mp4")
                }`
            } type="video/mp4"></source>
        </video>

        return <div 
        className={className}
        onClick={()=>setRitmikOpen(true)}
    >
        {video}
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