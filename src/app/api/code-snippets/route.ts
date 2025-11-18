import { NextRequest, NextResponse } from "next/server";

type FrappeRow = {
  route?: string;
  seo_title?: string | null;
  snippet_name?: string | null;
};

type ResultRow = {
  route: string;
  title: string;
};

function getBasicAuthHeader(apiKey?: string, apiSecret?: string) {
  if (!apiKey || !apiSecret) return undefined;
  const token = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");
  return `Basic ${token}`;
}

export async function GET(req: NextRequest) {
  const FRAPPE_URL = process.env.FRAPPE_URL;
  const API_KEY = process.env.FRAPPE_API_KEY;
  const API_SECRET = process.env.FRAPPE_API_SECRET;

  if (!FRAPPE_URL) {
    return NextResponse.json(
      { error: "Missing FRAPPE_URL environment variable" },
      { status: 500 }
    );
  }

  // Build Frappe resource API URL to request only required fields
  const fields = JSON.stringify(["route", "seo_title", "snippet_name"]);
  const filters = JSON.stringify([["published", "=", 1]]);
  const encodedFields = encodeURIComponent(fields);
  const encodedFilters = encodeURIComponent(filters);
  // &filters=${encodedFilters} add this part in URL if filtering is needed
  // limit_page_length controls how many records are returned; adjust as needed
  const url = `${FRAPPE_URL.replace(/\/$/, "")}/api/resource/Code%20Snippet?fields=${encodedFields}&filters=${encodedFilters}&limit_page_length=100`;

  const headers: Record<string, string> = {
    "Accept": "application/json",
  };

  const auth = getBasicAuthHeader(API_KEY, API_SECRET);
  if (auth) headers["Authorization"] = auth;

  try {
    const resp = await fetch(url, { method: "GET", headers });

    if (!resp.ok) {
      const text = await resp.text().catch(() => "");
      return NextResponse.json(
        { error: "Failed fetching from Frappe", status: resp.status, detail: text },
        { status: 502 }
      );
    }

    const json = await resp.json();
    // Frappe resource API returns data in json.data (array)
    const rows: FrappeRow[] = Array.isArray(json?.data) ? json.data : [];

    const result: ResultRow[] = rows.map((r) => {
      const route = r.route ?? "";
      const title = (r.seo_title && r.seo_title.trim()) ? r.seo_title : (r.snippet_name ?? "");
      return { route, title };
    }).filter(r => r.route); // drop rows with empty route

    // return NextResponse.json({ items: result }, { status: 200 });
    return NextResponse.json( {
        success: 200,
        data: result,
        count: result.length,
      })
  } catch (err: unknown) {
    return NextResponse.json(
      { error: "Unexpected error when contacting Frappe", detail: String(err) },
      { status: 500 }
    );
  }
}

