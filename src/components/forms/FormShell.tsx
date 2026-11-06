"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Shared form plumbing. Posts JSON to NEXT_PUBLIC_FORM_ENDPOINT when set
 * (e.g. a Google Apps Script web app); otherwise opens the visitor's mail
 * client with the details pre-filled so nothing is lost before the backend exists.
 */
export function FormShell({
  formName,
  mailTo,
  submitLabel,
  successTitle,
  successText,
  children,
}: {
  formName: string;
  mailTo: string;
  submitLabel: string;
  successTitle: string;
  successText: string;
  children: ReactNode;
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;

    const data = Object.fromEntries(new FormData(form).entries());
    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    setStatus("sending");

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({ form: formName, ...data }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
      } else {
        const lines = Object.entries(data)
          .filter(([, v]) => String(v).trim() !== "")
          .map(([k, v]) => `${k}: ${v}`)
          .join("\n");
        window.location.href = `mailto:${mailTo}?subject=${encodeURIComponent(formName)}&body=${encodeURIComponent(lines)}`;
      }
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-[var(--radius-lg)] border border-line bg-paper-tint p-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-brand" aria-hidden="true" />
        <h2 className="mt-4 text-2xl text-brand">{successTitle}</h2>
        <p className="mx-auto mt-2 max-w-md text-ink-600">{successText}</p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-6 text-sm font-semibold text-brand hover:text-brand">
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      {children}
      {status === "error" && (
        <p role="alert" className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          The form could not be sent. Please try again, or call the school office at +91 4651 270556.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded-full border border-brand bg-brand text-white hover:bg-white hover:text-brand px-7 py-3 font-semibold transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}

export function Field({
  label,
  name,
  type = "text",
  required,
  options,
  placeholder,
  textarea,
  hint,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  options?: string[];
  placeholder?: string;
  textarea?: boolean;
  hint?: string;
}) {
  const id = `f-${name}`;
  const base =
    "mt-1.5 w-full rounded-md border border-line bg-paper px-3.5 py-2.5 text-[0.95rem] text-ink-900 placeholder:text-ink-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand";
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink-900">
        {label}
        {required && <span aria-hidden="true" className="text-brand"> *</span>}
      </label>
      {options ? (
        <select id={id} name={name} required={required} defaultValue="" className={base}>
          <option value="" disabled>Select</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      ) : textarea ? (
        <textarea id={id} name={name} required={required} rows={4} placeholder={placeholder} className={base} />
      ) : (
        <input id={id} name={name} type={type} required={required} placeholder={placeholder} className={base} />
      )}
      {hint && <p className="mt-1 text-xs text-ink-600">{hint}</p>}
    </div>
  );
}

export function Fieldset({ legend, children }: { legend: string; children: ReactNode }) {
  return (
    <fieldset className="rounded-[var(--radius-md)] border border-line p-6">
      <legend className="px-2 font-sans text-sm font-semibold text-brand">{legend}</legend>
      <div className="grid gap-5 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}
