// import axios from "axios";

// import { env, isAbsoluteUrl } from "@/lib/utils";

// export async function query(url = "", options = {}) {
//   const requestUrl = isAbsoluteUrl(url)
//     ? url
//     : env().backendApiUrl?.concat(url);

//   return await fetch(requestUrl ?? url, {
//     credentials: "include",
//     headers: {
//       Accept: "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     ...options,
//   });
// }

// export async function mutate(url: string = "", data?: any) {
//   const requestUrl = isAbsoluteUrl(url)
//     ? url
//     : env().backendApiUrl?.concat(url);

//   return await axios.post(requestUrl ?? "", data, {
//     withCredentials: true,
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     baseURL: env().backendApiUrl,
//   });
// }

import axios from "axios";
import { cookies } from "next/headers";
import { env, isAbsoluteUrl } from "@/lib/utils";

export async function query(url = "", options = {}) {
  const requestUrl = isAbsoluteUrl(url)
    ? url
    : env().backendApiUrl?.concat(url);

  const token = cookies().get("token")?.value;

  return await fetch(requestUrl ?? url, {
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
      ...options,
    },
    ...options,
  });
}

export async function mutate(url: string = "", data?: any) {
  const requestUrl = isAbsoluteUrl(url)
    ? url
    : env().backendApiUrl?.concat(url);

  const token = cookies().get("token")?.value;

  return await axios.post(requestUrl ?? "", data, {
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    baseURL: env().backendApiUrl,
  });
}
