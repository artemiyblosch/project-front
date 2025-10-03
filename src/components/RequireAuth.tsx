import { authCall } from "@/lib/calls";
import { FCProps } from "@/lib/FCProps";
import { getLocal } from "@/lib/localstorage";
import { redirect } from "next/navigation";
import React from "react";


export const RequireAuth : React.FC<FCProps> = ( {children} ) => {
    const authData = getLocal("User");

    React.useEffect(() => {
        if (!authData) redirect('/login')
        authCall(JSON.parse(authData)).catch(() => redirect('/login'))
    }, [authData]);

    return children;
}