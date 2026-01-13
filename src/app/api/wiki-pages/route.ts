import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const wikiDir = path.join(process.cwd(), "src/app/(dev-insights)/erpnext/wiki");
    
    if (!fs.existsSync(wikiDir)) {
      return NextResponse.json({ data: [] });
    }

    const items = fs.readdirSync(wikiDir, { withFileTypes: true });
    
    const validItems = items
      .filter((item) => item.isDirectory())
      .map((item) => {
        const title = item.name
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
          
        return {
          title: title,
          route: item.name,
          description: title // Using title as description for now
        };
      });

    return NextResponse.json({ success: true, message: validItems });
  } catch (error) {
    console.error("Error fetching wiki pages:", error);
    return NextResponse.json(
      { error: "Failed to fetch wiki pages" }, 
      { status: 500 }
    );
  }
}
