import { NextResponse } from "next/server";

const BASE_URL = process.env.FRAPPE_BASE_URL || "https://erp.finbyz.tech";
const API_KEY = process.env.FRAPPE_API_KEY || "";
const API_SECRET = process.env.FRAPPE_API_SECRET || "";

export async function GET() {
  try {
    const url = new URL(`${BASE_URL}/api/resource/Code Snippet`);
    url.searchParams.append("filters", JSON.stringify([["published", "=", 1]]));
    url.searchParams.append("fields", JSON.stringify(["name", "route", "seo_description", "seo_title"]));
    url.searchParams.append("limit_page_length", "0");

    const response = await fetch(url.toString(), {
      headers: {
        "Authorization": `token ${API_KEY}:${API_SECRET}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      console.error("Error fetching code snippets:", response.status, response.statusText);
      return NextResponse.json(
        { error: "Failed to fetch code snippets" },
        { status: response.status }
      );
    }

    const data = await response.json();
    const snippets = data.data || [];

    const formattedSnippets = snippets.map((snippet: {
      name: string;
      route: string;
      seo_description: string;
      seo_title: string;
    }) => ({
      name: snippet.name,
      route: snippet.route,
      description: snippet.seo_description,
      title: snippet.seo_title,
    }));

    return NextResponse.json({ success: true, message: formattedSnippets });
  } catch (error) {
    console.error("Error fetching code snippets:", error);
    return NextResponse.json(
      { error: "Failed to fetch code snippets" },
      { status: 500 }
    );
  }
}
