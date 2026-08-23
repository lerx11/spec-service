import { NextResponse } from "next/server";

export const runtime = "nodejs";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(req: Request) {
  let data: FormData;
  try {
    data = await req.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "Неверный формат данных" }, { status: 400 });
  }

  const city = String(data.get("city") || "");
  const task = String(data.get("task") || "");
  const when = String(data.get("when") || "");
  const date = String(data.get("date") || "");
  const phone = String(data.get("phone") || "");
  const photo = data.get("photo") as File | null;

  if (!phone || !task) {
    return NextResponse.json({ ok: false, error: "Заполните телефон и задачу" }, { status: 400 });
  }

  // Если токен не задан — принимаем как демо
  if (!BOT_TOKEN || !CHAT_ID) {
    return NextResponse.json({
      ok: true,
      message: "Заявка принята (демо-режим). Укажите TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID в .env",
    });
  }

  const whenText = when === "Выбрать дату" && date ? `Выбрать дату (${date})` : when;
  const text =
    `🛠 Новая заявка\n` +
    `Город: ${city}\n` +
    `Задача: ${task}\n` +
    `Когда: ${whenText}\n` +
    `Телефон: ${phone}`;

  try {
    if (photo && photo.size > 0) {
      const buf = Buffer.from(await photo.arrayBuffer());
      const form = new FormData();
      form.append("chat_id", CHAT_ID);
      form.append("caption", text);
      form.append("photo", new Blob([buf], { type: photo.type }), photo.name || "photo.jpg");
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, {
        method: "POST",
        body: form,
      });
      if (!res.ok) {
        const j = await res.json();
        return NextResponse.json({ ok: false, error: j.description ?? "Ошибка Telegram" }, { status: 502 });
      }
    } else {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text }),
      });
      if (!res.ok) {
        const j = await res.json();
        return NextResponse.json({ ok: false, error: j.description ?? "Ошибка Telegram" }, { status: 502 });
      }
    }
    return NextResponse.json({ ok: true, message: "Заявка принята" });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Сбой отправки" }, { status: 500 });
  }
}
