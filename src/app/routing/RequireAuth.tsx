import { FCProps } from "@/consts/FCProps";
import React from "react";


export const RequireAuth : React.FC<FCProps> = ( {children} ) => {
    const authData = localStorage.getItem("userName");

    React.useEffect(()=>{if (!authData) window.location.pathname = "/";}, [authData]);
    return children;
}