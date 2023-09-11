import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // try {
  //   const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  //   console.log(await data.json());
  //   return NextResponse.json(await data.json());
  // } catch (error) {
  //   console.log(error);
  // }
  return NextResponse.json({
    userId: 1,
    id: 1,
    title: "Sample todo",
    completed: false,
  });
}
