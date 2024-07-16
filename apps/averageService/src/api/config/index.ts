import returnFetch, { FetchArgs, ReturnFetchDefaultOptions } from 'return-fetch';
import { FetchInit, FetchJson } from '@/types/fetch';

function jsonParser(text: string): object | string {
  try {
    return JSON.parse(text);
  } catch (e: unknown) {
    if ((e as Error).name !== 'SyntaxError') {
      throw e;
    }
    return text.trim();
  }
}

export const jsonFetch = (args?: ReturnFetchDefaultOptions) => {
  const fetch = returnFetch(args);

  return async <T>(url: FetchArgs[0], init?: FetchInit) => {
    const response = await fetch(url, {
      ...init,
      credentials: 'include',
      body: init?.body && JSON.stringify(init.body),
    });
    const body = jsonParser(await response.text()) as T;

    return {
      headers: response.headers,
      ok: response.ok,
      redirected: response.redirected,
      status: response.status,
      statusText: response.statusText,
      type: response.type,
      url: response.url,
      body: body,
    } as FetchJson<T>;
  };
};

const commonHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export const sampleApiInstance = jsonFetch({
  baseUrl: 'https://dummyjson.com',
  headers: commonHeaders,
});
