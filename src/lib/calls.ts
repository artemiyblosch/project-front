import {getCookie} from './getCookie'

export type APICall = (data: object) => Promise<Response>;

export function callTo<T>(route : string) {
    return (data : T) => fetch(route, {
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken') ?? "",
        },
        method: "POST",
        body: JSON.stringify(data)
    })
}

export type AuthProps = {tag : string, password : string};
export const authCall = callTo<AuthProps>('/api/login/');

export type UserCreateProps = AuthProps & {name: string};
export const createUser = callTo<UserCreateProps>('/api/users/create');

export type GetGroupsProps = {pk : number}
export const getGroups = callTo<GetGroupsProps>('/api/users/groups');

export type TextingProps = {
    pk : number;
    password: string;
    group_pk : number;
    text: string;
}
export const textingCall = callTo<TextingProps>('/api/messages/text');

export type GetMessagesProps = {
    group : number;
}
export const getMessages = callTo<GetMessagesProps>('/api/messages/gfg');