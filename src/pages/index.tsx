import { RequireAuth } from "@/components/RequireAuth";

export default function Page() {
    return <RequireAuth>
        <div></div>
    </RequireAuth>
}