import { NextResponse } from "next/server";

export async function POST(req: Request){
  const form = await req.formData();
  // In real use: send via email provider or booking engine
  console.log("Contact form:", Object.fromEntries(form.entries()));
  return NextResponse.json({ ok: true });
}
