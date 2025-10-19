import { authCall } from "@/lib/calls";
import { FCProps } from "@/lib/FCProps";
import { getLocal } from "@/lib/localstorage";
import { useRouter } from "next/navigation";
import React from "react";


export const RequireAuth : React.FC<FCProps> = ( {children} ) => {
    const authData = getLocal("User");
    const router = useRouter();

    React.useEffect(() => {
        if (!authData) router.push('/login');
        authCall(JSON.parse(authData)).catch(() => router.push('/login'))
    }, [authData]);

    return children;
}