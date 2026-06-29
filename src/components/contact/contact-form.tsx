"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { site } from "@/lib/site";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    message: "",
  });

  const set =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const subject = encodeURIComponent("Reservation Enquiry — Çizgi");
  const body = encodeURIComponent(
    `Hello Çizgi,\n\nI'd love to enquire about a stay.\n\n` +
    `Name: ${form.name || "—"}\n` +
    `Email: ${form.email || "—"}\n` +
    `Check-in: ${form.checkIn || "—"}\n` +
    `Check-out: ${form.checkOut || "—"}\n` +
    `Guests: ${form.guests}\n\n` +
    `${form.message || ""}`
  );

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" value={form.name} onChange={set("name")} placeholder="Your name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={form.email} onChange={set("email")} placeholder="you@email.com" required />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="checkIn">Check-in</Label>
          <Input id="checkIn" type="date" value={form.checkIn} onChange={set("checkIn")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="checkOut">Check-out</Label>
          <Input id="checkOut" type="date" value={form.checkOut} onChange={set("checkOut")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="guests">Guests</Label>
          <select
            id="guests"
            value={form.guests}
            onChange={set("guests")}
            className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            {["1", "2", "3", "4", "5+"].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          value={form.message}
          onChange={set("message")}
          placeholder="Tell us about your trip — occasion, preferences, anything we should know."
          rows={4}
        />
      </div>

      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-ink text-sm font-medium tracking-wide text-chalk transition hover:bg-ink/90"
      >
        Send Enquiry by Email
      </button>
      <p className="text-center text-xs text-ink-soft">
        Opens your email app with your details pre-filled.
      </p>
    </form>
  );
}
