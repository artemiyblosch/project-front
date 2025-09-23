export function getLocal(key : string) {
    if (typeof window !== "undefined") {
        const queryResult = localStorage.getItem(key);
        if(queryResult === null) return null;

        return JSON.parse(queryResult);
    }
    return null;
}

export function setLocal(key : string, value : object) {
    if (typeof window !== "undefined") localStorage.setItem(key,JSON.stringify(value));
}

export function removeLocal(key : string) {
    if(typeof window !== "undefined") localStorage.removeItem(key);
}