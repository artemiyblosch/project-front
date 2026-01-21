import { createContext } from "react";
type ContextProps = {
    ritmikOpen : boolean,
    setRitmikOpen : React.Dispatch<React.SetStateAction<boolean>>,
    gVibe : string,
    setGVibe : React.Dispatch<React.SetStateAction<string>>,
    stickerOpen : boolean,
    setStickerOpen : React.Dispatch<React.SetStateAction<boolean>>,
    vibes : any,
    setVibes : React.Dispatch<React.SetStateAction<any>>,
    group : string,
    setGroup : React.Dispatch<React.SetStateAction<string>>,
    messages : any,
    setMessages : React.Dispatch<React.SetStateAction<any>>,
    user : any,
    ritmikAnim : boolean,
    setRitmikAnim : React.Dispatch<React.SetStateAction<boolean>>
}

export const Context = createContext<ContextProps>({
    ritmikOpen : false,
    setRitmikOpen : () => {},
    gVibe : "",
    setGVibe : () => {},
    stickerOpen : false,
    setStickerOpen : () => {},
    vibes : {},
    setVibes : () => {},
    group : "",
    setGroup : () => {},
    messages : "",
    setMessages : () => {},
    user : {},
    ritmikAnim : false,
    setRitmikAnim : () => {},
});