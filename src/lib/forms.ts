import { APICall } from "./calls";

export function getKey(formData : FormData, key : string) {
    return formData.get(key)?.toString();
}

export function formToApi(formData : FormData, keys : string[], call : APICall) : Promise<Response> | null {
    const obj : any = {}; 
    for(const key of keys) {
        if(getKey(formData,key) == null) return null;
        obj[key] = getKey(formData,key);
    }
    return call(obj);
}

type StatusResponse = (r : string) => void;
export class APIQuery {
    keys : string[];
    apiCall : APICall;
    statusResponses : [number, StatusResponse][] = [];
    onFailure : StatusResponse = (e) => console.log("???: "+e);
    onNull : StatusResponse = (key) => alert("no "+key);
    additionalParams : object = {};

    constructor(keys : string[], apiCall : APICall) {
        this.keys = keys;
        this.apiCall = apiCall;
    }

    addResponseTo(status : number, response : StatusResponse) {
        this.statusResponses.push([status,response]);
        return this;
    }

    addOnFailure(c : StatusResponse) {
        this.onFailure = c;
        return this;
    }

    addParams(params : object) {
        this.additionalParams = params;
        return this;
    }

    addOnNull(c : StatusResponse) {
        this.onNull = c;
        return this;
    }

    callable() {
    return (formData : FormData | object) => {
        let obj : any = {};
        if (formData instanceof FormData) {
        for(const key of this.keys) {
            if(getKey(formData,key) == null) {
                this.onNull(key);
                return;
            }
            obj[key] = getKey(formData,key);
        }}
        else obj = formData;
        obj = {...obj, ...this.additionalParams};
        
        this.apiCall(obj)
        .then((response : Response) => {
            const status = response.status;
            for(const resp of this.statusResponses) {
                if(status !== resp[0]) continue;

                response.text()
                .then(resp[1])
                .catch(this.onFailure);
            }
        })
        .catch(this.onFailure)
    }}
}