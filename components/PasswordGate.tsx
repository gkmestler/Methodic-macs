"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import { siteConfig } from "@/content/site-data";

// Courtesy lock, not real security. Off by default via siteConfig.passwordGate.
// A single shared passphrase, checked client-side. When disabled, renders
// children directly.
export default function PasswordGate({ children }: { children: ReactNode }) {
  const { enabled, passphrase } = siteConfig.passwordGate;
  const [unlocked, setUnlocked] = useState(!enabled);
  const [entry, setEntry] = useState("");
  const [error, setError] = useState(false);

  if (unlocked) return <>{children}</>;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (entry === passphrase) {
      setUnlocked(true);
    } else {
      setError(true);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-paper">
      <Image
        src={siteConfig.logos.iconWhite}
        alt="Methodic Ventures"
        width={48}
        height={48}
        className="mb-8 h-12 w-auto"
        priority
      />
      <form onSubmit={submit} className="flex w-full max-w-xs flex-col items-center gap-4">
        <label htmlFor="passphrase" className="kicker text-slate">
          Enter passphrase
        </label>
        <input
          id="passphrase"
          type="password"
          value={entry}
          onChange={(e) => {
            setEntry(e.target.value);
            setError(false);
          }}
          className="w-full border-b border-slate/50 bg-transparent px-1 py-2 text-center font-body text-paper outline-none focus:border-deepblue"
          autoFocus
        />
        <button
          type="submit"
          className="kicker mt-2 border border-paper/40 px-6 py-2 text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
        >
          Enter
        </button>
        {error && (
          <p className="text-sm text-slate">That passphrase is not correct.</p>
        )}
      </form>
      <p className="mt-10 text-xs text-slate">Confidential. Not for distribution.</p>
    </main>
  );
}
