import { GroupBar } from "@/components";
import { RequireAuth } from "@/components/RequireAuth";
import React from "react";


export default function Page() {
    'use client';

    return <RequireAuth>
        <GroupBar/>
    </RequireAuth>
}