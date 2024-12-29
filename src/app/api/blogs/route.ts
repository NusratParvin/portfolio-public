import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/dbConnect";
import Blog from "@/models/Blog";

export async function GET() {
  try {
    await connectToDatabase();

    const blogsData = await Blog.find({});
    // console.log(blogsData);
    if (!blogsData) {
      return NextResponse.json(
        { message: "No Blog data found" },
        { status: 404 }
      );
    }

    return NextResponse.json(blogsData);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch Blog" },
      { status: 500 }
    );
  }
}
