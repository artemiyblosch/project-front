import { Context } from "@/components/Context";
import { useContext, useEffect, useState } from "react"

import { RitmikCool1 } from "./Cool/1";
import { RitmikCool2 } from "./Cool/2";
import { RitmikCool3 } from "./Cool/3";
import { RitmikCool4 } from "./Cool/4";
import { RitmikCool5 } from "./Cool/5";

import { RitmikCt1 } from "./Ct/1";
import { RitmikCt2 } from "./Ct/2";
import { RitmikCt3 } from "./Ct/3";
import { RitmikCt4 } from "./Ct/4";
import { RitmikCt5 } from "./Ct/5";

import { RitmikSad1 } from "./Sad/1";
import { RitmikSad2 } from "./Sad/2";
import { RitmikSad3 } from "./Sad/3";
import { RitmikSad4 } from "./Sad/4";
import { RitmikSad5 } from "./Sad/5";

export const RitmikAnim : React.FC = () => {
    const {gVibe : vibes, ritmikAnim} = useContext(Context);
    const [frame, setFrame] = useState<number>(1);
    const [rng, setRng] = useState<any>(null);

    useEffect(() => {
        if(ritmikAnim) {
            setRng(setInterval(() => {
                setFrame(Math.floor(Math.random() * 5));
            }, 500));
        } else{
            clearInterval(rng);
        }
    },[ritmikAnim]);
    
    const frameMap : Record<string,React.ReactElement[]> = {
        cool: [RitmikCool1,RitmikCool2,RitmikCool3,RitmikCool4,RitmikCool5],
        ct: [RitmikCt1,RitmikCt2,RitmikCt3,RitmikCt4,RitmikCt5],
        sad: [RitmikSad1,RitmikSad2,RitmikSad3,RitmikSad4,RitmikSad5],
    }
    return <>{frameMap[vibes][frame]}</>
}