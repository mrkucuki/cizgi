"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className="flex items-center gap-2 text-sm text-chalk/80">
        <Check className="h-4 w-4 text-sea" />
        Thank you — we&apos;ll be in touch with the Çizgi journal.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setDone(true);
      }}
      className="flex items-center gap-2 border-b border-chalk/25 pb-2 focus-within:border-chalk/60"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        aria-label="Email address"
        className="w-full bg-transparent text-sm text-chalk placeholder:text-chalk/40 focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="shrink-0 text-chalk/70 transition hover:text-chalk"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
