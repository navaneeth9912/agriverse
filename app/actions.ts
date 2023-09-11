"use server";

export async function fetchSample() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await data.json();
}

export async function fetchGraphQL(body:any) {
  return await (await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://13.232.128.192"}/graphql`, body)).json();
}