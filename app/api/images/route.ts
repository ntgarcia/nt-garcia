import { NextRequest, NextResponse } from "next/server";
import { readdir } from "fs/promises";
import { join } from "path";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const folder = searchParams.get("folder");

  if (!folder) {
    return NextResponse.json(
      { error: "Folder parameter is required" },
      { status: 400 }
    );
  }

  try {
    // Remove leading slash if present and ensure it starts with public path
    const folderPath = folder.startsWith("/")
      ? folder.slice(1)
      : folder;
    const publicPath = join(
      process.cwd(),
      "public",
      folderPath
    );

    // Read directory contents
    const files = await readdir(publicPath, {
      withFileTypes: true,
    });

    // Filter for image files and sort alphabetically
    const imageExtensions = [
      ".jpg",
      ".jpeg",
      ".png",
      ".gif",
      ".webp",
      ".svg",
    ];
    const imageFiles = files
      .filter((file) => {
        if (!file.isFile()) return false;
        const ext = file.name
          .toLowerCase()
          .substring(file.name.lastIndexOf("."));
        return imageExtensions.includes(ext);
      })
      .map((file) => `/${folderPath}/${file.name}`)
      .sort();

    return NextResponse.json({ images: imageFiles });
  } catch (error) {
    console.error("Error reading folder:", error);
    return NextResponse.json(
      { error: "Failed to read folder" },
      { status: 500 }
    );
  }
}
