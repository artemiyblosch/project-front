export function getLocal(key : string) {
    if (typeof window === "undefined") return null

    const queryResult = localStorage.getItem(key);
    if(queryResult === null) return null;

    return JSON.parse(queryResult);
}

export function setLocal(key : string, value : object | string) {
    if (typeof window === "undefined") return
    if (typeof value === "string") localStorage.setItem(key,value);
    localStorage.setItem(key,JSON.stringify(value));
}

export function removeLocal(key : string) {
    if(typeof window !== "undefined") localStorage.removeItem(key);
}