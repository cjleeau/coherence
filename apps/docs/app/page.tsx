"use client";

import { useEffect, useState } from "react";

const THEMES = ["light", "dark", "hc-light", "hc-dark"] as const;
type Theme = (typeof THEMES)[number];

export default function Page() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <main className="min-h-screen bg-surface-base text-text-primary p-8 font-sans">
      <div className="mx-auto max-w-3xl space-y-6">
        {/* Header */}
        <header className="space-y-4">
          <p className="text-sm text-text-secondary">
            Coherence / Token System Core
          </p>

          <h1 className="text-4xl font-bold">
            Theme system is live
          </h1>

          <p className="text-lg text-text-secondary max-w-2xl">
            This proves semantic tokens + Tailwind + runtime theme switching are all wired correctly.
          </p>
        </header>

        {/* Theme Switcher */}
        <section className="flex flex-wrap gap-3">
          {THEMES.map((t) => {
            const active = t === theme;

            return (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={[
                  "px-4 py-2 rounded-lg border text-sm transition",
                  active
                    ? "bg-action-primary text-action-primaryText border-border-strong"
                    : "bg-surface-raised text-text-primary border-border-subtle hover:border-border-strong"
                ].join(" ")}
              >
                {t}
              </button>
            );
          })}
        </section>

        {/* Demo surface */}
        <section className="rounded-xl border border-border-subtle bg-surface-raised p-6 space-y-4">
          <h2 className="text-2xl font-semibold">
            Token preview
          </h2>

          <div className="space-y-2">
            <p className="text-text-primary">Primary text</p>
            <p className="text-text-secondary">Secondary text</p>
            <p className="text-text-muted">Muted text</p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <div className="rounded-lg bg-action-primary px-4 py-3 text-action-primaryText">
              Primary action
            </div>

            <div className="rounded-lg border border-border-strong bg-surface-sunken px-4 py-3 text-text-primary">
              Secondary container
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <span className="text-status-success">Success</span>
            <span className="text-status-warning">Warning</span>
            <span className="text-status-critical">Critical</span>
          </div>
        </section>
      </div>
    </main>
  );
}