export type AuthProps = {name : string, password : string}

export function authCall(authData : AuthProps) {
    return fetch("/api/auth", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: "POST",
        body: JSON.stringify(authData)
    })
}