import { NextResponse } from "next/server";
import { getProjects } from "@/sanity/lib/client";

export async function GET() {
  try {
    const projects = await getProjects();
    return NextResponse.json({ projects });
  } catch {
    return NextResponse.json({ projects: [], error: "Failed to fetch" }, { status: 500 });
  }
}
