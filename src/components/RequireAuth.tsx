import { authCall } from "@/lib/calls";
import { FCProps } from "@/lib/FCProps";
import { getLocal } from "@/lib/localstorage";
import { traverse } from "@/lib/traverse";
import React from "react";


export const RequireAuth : React.FC<FCProps> = ( {children} ) => {
    const authData = getLocal("User");

    React.useEffect(() => {
        if (!authData) traverse('/login')
        authCall(JSON.parse(authData)).catch(() => traverse('/login'))
    }, [authData]);

    return children;
}