//prettier-ignore
export const requestPostDefault = (token: string, data: {}) =>
  fetch(process.env.API_HOST + "/auth/exchange/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token,
    },
    body: JSON.stringify(data),
  });

export const staticDataFetcher = (url: RequestInfo | URL) =>
  fetch(url, { cache: "force-cache" }).then(async (res) => await res.json());

export const streamDataFetcher = (url: RequestInfo | URL) =>
  fetch(url).then(async (res) => await res.json());

export const postDataFetcher = (url: RequestInfo | URL, body: {}) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "force-cache",
    body: JSON.stringify(body),
  });
