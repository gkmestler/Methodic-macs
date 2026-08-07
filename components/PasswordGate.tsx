"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { siteConfig } from "@/content/site-data";

const STORAGE_KEY = "macs-access";

// Courtesy lock, not real security. Off by default via siteConfig.passwordGate.
// A single shared passphrase, checked client-side. When disabled, renders
// children directly. A link carrying ?access=<passphrase> unlocks on arrival
// (and is remembered), so shared links open directly while the bare URL
// shows the lock screen.
export default function PasswordGate({ children }: { children: ReactNode }) {
  const { enabled, passphrase } = siteConfig.passwordGate;
  const [unlocked, setUnlocked] = useState(!enabled);
  const [entry, setEntry] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    try {
      const params = new URLSearchParams(window.location.search);
      const key = params.get("access");
      if (key === passphrase || localStorage.getItem(STORAGE_KEY) === passphrase) {
        localStorage.setItem(STORAGE_KEY, passphrase);
        setUnlocked(true);
        if (key) {
          // Drop the key from the address bar once consumed
          window.history.replaceState({}, "", window.location.pathname + window.location.hash);
        }
      }
    } catch {
      // Storage unavailable (private mode etc.) — manual entry still works
    }
  }, [enabled, passphrase]);

  if (unlocked) return <>{children}</>;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (entry === passphrase) {
      try {
        localStorage.setItem(STORAGE_KEY, passphrase);
      } catch {}
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
