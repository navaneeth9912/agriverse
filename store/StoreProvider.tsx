"use client";
import { RootStore, StoreContext } from "~/src/models";
import { fetchGraphQL } from "~/app/actions";

export function createHttpClient(url: string, options: HttpClientOptions = {}) {
  return new GraphQLClient(url, options);
}

export class GraphQLClient {
  url: string;
  options: HttpClientOptions;
  headers: Record<string, string> | undefined;
  constructor(url: string, options: HttpClientOptions = {}) {
    this.url = url;
    this.options = options;
    this.headers = { ...options.headers, ...this.headers };
  }
  request<T = any, V = Variables>(query: string, variables?: V) {
    console.log("test the server component", query, variables);
    const { headers, ...others } = this.options;
    return fetchGraphQL({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization:
        //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDYxNmM4YjI4OTljZWIyOWYwMDdlOSIsInJvbGUiOiJTRUxMRVIiLCJpYXQiOjE2OTE3NTIyMDl9.H1P_MBJkTl1ALlZ4tzenuTSZ5_XxoEvuPFlp_Sg_GFE",
        ...this.headers,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      cache: "no-store",
      ...others,
    })
      .then((data) => {
        if (data.errors) {
          throw data.errors;
        }
        console.log("datalog", data.data);
        return data.data;
      })
      .catch((err) => {
        throw err;
      });
  }
  setHeaders(headers: Record<string, string>) {
    this.headers = { ...this.headers, ...headers };
  }
}

export interface GraphQLResponse<T = any> {
  data?: T;
  errors?: GraphQLError[];
}

export interface GraphQLError {
  message: string;
  locations?: {
    line: number;
    column: number;
  }[];
  path?: string[];
  extensions?: Record<string, any>;
}

export interface HttpClientOptions extends RequestInit {
  headers?: Record<string, string>;
}

export interface Variables {
  [key: string]: any;
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const rootStore = RootStore.create(undefined, {
    gqlHttpClient: createHttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://13.232.128.192"}/graphql`, {
      credentials: "same-origin",
    }),
    ssr: true,
  });
  // const store = initializeStore();
  return (
    <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
  );
}
