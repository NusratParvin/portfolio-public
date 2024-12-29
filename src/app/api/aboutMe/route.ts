import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/dbConnect";
import AboutMe from "@/models/AboutMe";

export async function GET() {
  try {
    await connectToDatabase();

    const aboutMeData = await AboutMe.findOne();

    if (!aboutMeData) {
      return NextResponse.json(
        { message: "No About Me data found" },
        { status: 404 }
      );
    }

    return NextResponse.json(aboutMeData);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch About Me data" },
      { status: 500 }
    );
  }
}
