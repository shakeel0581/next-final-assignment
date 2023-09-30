// Notice from where NextResponse is imported:
import { NextResponse } from "next/server";

// Notice the function definition:
export  function GET(request: Request) {
  // ...
  console.log('Response Error',request.json())
  return NextResponse.json({ message: "Hello World",data: request.text() });
}