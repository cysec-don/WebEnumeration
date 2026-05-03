import { NextResponse } from "next/server";
import { RESOURCES } from "@/lib/discovery-data";

export async function GET() {
  return NextResponse.json({
    total: RESOURCES.length,
    resources: RESOURCES.map((r) => ({
      id: r.id,
      path: r.path,
      displayName: r.displayName,
      difficulty: r.difficulty,
      category: r.category,
    })),
    difficulties: {
      easy: RESOURCES.filter((r) => r.difficulty === "easy").length,
      medium: RESOURCES.filter((r) => r.difficulty === "medium").length,
      hard: RESOURCES.filter((r) => r.difficulty === "hard").length,
      expert: RESOURCES.filter((r) => r.difficulty === "expert").length,
    },
  });
}
