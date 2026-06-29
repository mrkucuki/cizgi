"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "cizgi-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-chalk/95 px-5 py-5 shadow-[0_-8px_40px_-12px_rgba(35,37,33,0.18)] backdrop-blur-sm sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">
          We use cookies only through embedded Google Maps on our contact page. No
          advertising or tracking cookies are used.{" "}
          <Link href="/privacy" className="underline hover:text-ink">
            Privacy Policy
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={decline}
            className="rounded-full border border-border px-5 py-2 text-sm font-medium text-ink-soft transition hover:border-ink/30 hover:text-ink"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="rounded-full bg-ink px-5 py-2 text-sm font-medium text-chalk transition hover:bg-ink/90"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
