import axios from "axios";

import { env, isAbsoluteUrl } from "@/lib/utils";


export async function query(url = "", options = {}) {
    const requestUrl = isAbsoluteUrl(url) ? url : env().backendApiUrl?.concat(url);

    return await fetch(requestUrl ?? url, {
        credentials: "include",
        headers: {
            Accept: "application/json",
        },
        ...options,
    });
}

export async function mutate(url: string = '', data?: any) {
    const requestUrl = isAbsoluteUrl(url) ? url : env().backendApiUrl?.concat(url);

    return await axios.post(requestUrl ?? "", data, {
        withCredentials: true,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        baseURL: env().backendApiUrl,
    });
}