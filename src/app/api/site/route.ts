import { NextResponse } from "next/server";
import { getSiteSettings, getSkills } from "@/sanity/lib/client";

export async function GET() {
  try {
    const [settings, skills] = await Promise.all([getSiteSettings(), getSkills()]);
    return NextResponse.json({ settings, skills });
  } catch {
    return NextResponse.json({ settings: null, skills: null, error: "Failed to fetch" }, { status: 500 });
  }
}
