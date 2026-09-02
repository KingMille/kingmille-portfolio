import { NextResponse } from "next/server";
import { getBlogPosts } from "@/sanity/lib/client";

export async function GET() {
  try {
    const posts = await getBlogPosts();
    return NextResponse.json({ posts });
  } catch {
    return NextResponse.json({ posts: [], error: "Failed to fetch" }, { status: 500 });
  }
}
