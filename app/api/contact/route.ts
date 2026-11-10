import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  try {
    const { name, email, phone = "", message } = await request.json();
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Complete los campos obligatorios." }, { status: 400 });
    }
    if (name.length > 120 || email.length > 254 || phone.length > 40 || message.length > 4000) {
      return NextResponse.json({ error: "Uno de los campos supera el límite permitido." }, { status: 400 });
    }
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) {
      return NextResponse.json({ error: "El formulario aún no está conectado a la base de datos." }, { status: 503 });
    }
    const supabase = createClient(url, key, { auth: { persistSession: false } });
    const { error } = await supabase.from("contact_messages").insert({
      name: name.trim(), email: email.trim(), phone: phone.trim(), message: message.trim()
    });
    if (error) {
      console.error("Supabase contact insert:", error.message);
      return NextResponse.json({ error: "No se pudo guardar su mensaje. Intente más tarde." }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Solicitud no válida." }, { status: 400 });
  }
}
