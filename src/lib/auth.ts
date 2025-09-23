import {getCookie} from './getCookie'

export type AuthProps = {name : string, password : string}

export function authCall(authData : AuthProps) {
    return fetch("/api/login/", {
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken') ?? ""
        },
        method: "POST",
        body: JSON.stringify(authData)
    })
}