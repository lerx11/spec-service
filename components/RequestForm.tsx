"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SERVICE } from "@/lib/constants";
import Icon from "./Icons";

const schema = z.object({
  city: z.string().min(1, "Выберите город"),
  task: z.string().min(10, "Опишите задачу подробнее"),
  when: z.string().min(1, "Выберите время"),
  date: z.string().optional(),
  phone: z
    .string()
    .min(6, "Укажите телефон")
    .regex(/[0-9+\-()\s]{6,}/, "Неверный формат"),
  photo: z.any().optional(),
});

type FormValues = z.infer<typeof schema>;

type Status = "idle" | "loading" | "success" | "error";

export default function RequestForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverMsg, setServerMsg] = useState("");
  const [fileName, setFileName] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { city: "", task: "", when: "", date: "", phone: "" },
  });

  const whenValue = watch("when");

  const onSubmit = async (data: FormValues) => {
    setStatus("loading");
    setServerMsg("");
    try {
      const fd = new FormData();
      fd.append("город", data.city);
      fd.append("задача", data.task);
      const whenText = data.when === "Выбрать дату" && data.date ? `${data.when} · ${data.date}` : data.when;
      fd.append("когда", whenText);
      fd.append("телефон", data.phone);
      if (data.photo?.[0]) fd.append("фото", data.photo[0]);

      const res = await fetch("https://formspree.io/f/mppaelnb", {
        method: "POST",
        body: fd,
      });
      const json = await res.json().catch(() => ({ ok: res.ok }));
      if (res.ok && json.ok) {
        setStatus("success");
        reset();
        setFileName("");
      } else {
        const errors = json.errors?.map((e: { message?: string }) => e.message).filter(Boolean).join(", ");
        setStatus("error");
        setServerMsg(errors || "Не удалось отправить. Попробуйте ещё раз или позвоните нам.");
      }
    } catch {
      setStatus("error");
      setServerMsg("Сбой сети. Попробуйте ещё раз или позвоните нам.");
    }
  };

  if (status === "success") {
    return (
      <div id="form" className="bg-cat-black py-16 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-xl rounded-2xl border border-cat-yellow/40 bg-cat-gray/40 p-8 text-center sm:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cat-yellow">
              <Icon name="check" className="h-9 w-9 text-cat-black" />
            </div>
            <h2 className="font-heading text-2xl font-black uppercase text-white sm:text-3xl">
              Заявка принята
            </h2>
            <p className="mt-4 font-body text-base text-white/80">
              Мы получили вашу задачу и поможем найти подходящий вариант.
            </p>
            <p className="mt-2 font-body text-sm text-white/60">
              При необходимости уточним детали по телефону или в мессенджере.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a href={SERVICE.phoneHref} className="btn-primary px-6 py-3.5">
                <Icon name="phone" className="h-5 w-5" />
                Позвонить
              </a>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="btn-outline px-6 py-3.5"
              >
                Отправить ещё одну
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="form" className="bg-cat-black py-16 sm:py-24">
      <div className="container-x">
        <div className="text-center">
          <h2 className="section-title text-white">Получить цену</h2>
          <div className="mx-auto mt-5 h-1 w-24 bg-cat-yellow" />
          <p className="section-subtitle mx-auto max-w-2xl text-white/70">
            Опишите задачу — поможем найти подходящий вариант
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="mx-auto mt-12 max-w-2xl space-y-5"
        >
          {/* Город */}
          <div>
            <label htmlFor="city" className="form-label">
              Город
            </label>
            <div className="relative">
              <select
                id="city"
                {...register("city")}
                className={`form-input appearance-none pr-10 ${
                  errors.city ? "border-red-500" : ""
                }`}
              >
                <option value="">Выберите город</option>
                {SERVICE.cities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
                <option value="other">Другой город</option>
              </select>
              <Icon
                name="chevron-down"
                className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-cat-yellow"
              />
            </div>
            {errors.city && (
              <p className="form-error">{errors.city.message}</p>
            )}
          </div>

          {/* Задача */}
          <div>
            <label htmlFor="task" className="form-label">
              Что нужно сделать?
            </label>
            <textarea
              id="task"
              rows={4}
              placeholder="Например: нужно перевезти бытовку 6×2,5 м из Химок в Одинцово"
              className={`form-input resize-none ${
                errors.task ? "border-red-500" : ""
              }`}
              {...register("task")}
            />
            {errors.task && (
              <p className="form-error">{errors.task.message}</p>
            )}
          </div>

          {/* Когда */}
          <div>
            <label className="form-label">Когда?</label>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {["Сегодня", "Завтра", "Выбрать дату"].map((opt) => (
                <label
                  key={opt}
                  className={`flex cursor-pointer items-center justify-center rounded-lg border px-4 py-3 font-body text-sm transition-colors ${
                    whenValue === opt
                      ? "border-cat-yellow bg-cat-yellow/15 text-cat-yellow"
                      : "border-white/15 text-white/70 hover:border-cat-yellow/50"
                  }`}
                >
                  <input
                    type="radio"
                    value={opt}
                    className="sr-only"
                    {...register("when")}
                  />
                  {opt}
                </label>
              ))}
            </div>
            {errors.when && (
              <p className="form-error">{errors.when.message}</p>
            )}
            {whenValue === "Выбрать дату" && (
              <input
                type="date"
                className="form-input mt-3"
                {...register("date")}
              />
            )}
          </div>

          {/* Телефон */}
          <div>
            <label htmlFor="phone" className="form-label">
              Телефон
            </label>
            <input
              id="phone"
              type="tel"
              inputMode="tel"
              placeholder="+7 (___) ___-__-__"
              className={`form-input ${errors.phone ? "border-red-500" : ""}`}
              {...register("phone")}
            />
            {errors.phone && (
              <p className="form-error">{errors.phone.message}</p>
            )}
          </div>

          {/* Фото */}
          <div>
            <label className="form-label">Фото (необязательно)</label>
            <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-white/20 px-4 py-3 text-white/60 transition-colors hover:border-cat-yellow/60 hover:text-cat-yellow">
              <Icon name="document" className="h-5 w-5" />
              <span className="font-body text-sm">
                {fileName || "Прикрепить фото задачи"}
              </span>
              <input
                type="file"
                accept="image/*"
                className="sr-only"
                {...register("photo", {
                  onChange: (e) => {
                    const f = (e.target as HTMLInputElement).files?.[0];
                    setFileName(f ? f.name : "");
                  },
                })}
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary w-full py-4 text-lg disabled:opacity-70"
          >
            {status === "loading" ? (
              <>
                <span className="h-5 w-5 animate-spin-slow rounded-full border-2 border-cat-black/30 border-t-cat-black" />
                Отправка...
              </>
            ) : (
              <>
                Получить цену
                <Icon name="arrow-right" className="h-5 w-5" />
              </>
            )}
          </button>

          {status === "error" && (
            <p className="rounded-lg bg-red-500/10 px-4 py-3 text-center font-body text-sm text-red-300">
              {serverMsg}
            </p>
          )}

          <p className="text-center font-body text-xs text-white/40">
            Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
          </p>
        </form>
      </div>
    </section>
  );
}
