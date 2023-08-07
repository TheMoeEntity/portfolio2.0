// require("dotenv").config();
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET(req: NextRequest, res: NextResponse) {
  const jsonDirectory = path.join(process.cwd(), "json");
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + "/data.json", "utf8");
  return NextResponse.json(fileContents, { status: 200 });
}
