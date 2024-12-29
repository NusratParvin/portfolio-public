import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/dbConnect";
import Project from "@/models/Project";

export async function GET() {
  try {
    await connectToDatabase();

    const projectsData = await Project.find({});
    // console.log(projectsData);
    if (!projectsData) {
      return NextResponse.json(
        { message: "No Projects data found" },
        { status: 404 }
      );
    }

    return NextResponse.json(projectsData);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch Projects" },
      { status: 500 }
    );
  }
}
