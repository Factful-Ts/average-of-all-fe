export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type JsonRequestInit = Omit<NonNullable<RequestInit>, 'method' | 'body' | 'next'> & {
  body?: object;
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
  method: Method;
};

export type FetchInit = JsonRequestInit;

export interface FetchJson<T> {
  headers: Headers;
  ok: boolean;
  redirected: boolean;
  status: number;
  statusText: string;
  type: ResponseType;
  url: string;
  body: T;
}
