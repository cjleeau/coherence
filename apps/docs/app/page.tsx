"use client";

import { useEffect, useState } from "react";
import { Box, Text, Heading, Stack, Inline } from "@coherence/primitives";

const THEMES = ["light", "dark", "hc-light", "hc-dark"] as const;
type Theme = (typeof THEMES)[number];

export default function Page() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Box className="min-h-screen bg-surface-base text-text-primary p-8 font-sans">
      <Stack className="mx-auto max-w-3xl" space="6">
        <Stack as="header" space="4">
          <Text as="p" size="sm" tone="secondary">
            Coherence / Primitives Foundation
          </Text>

          <Heading as="h1" size="xl">
            Box, Text, Heading, Stack and Inline are live
          </Heading>

          <Text as="p" size="lg" tone="secondary" className="max-w-2xl">
            This proves the first primitive layer is handling structure, text,
            hierarchy, vertical rhythm and horizontal alignment using the token system.
          </Text>
        </Stack>

        <Inline space="3" wrap>
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
        </Inline>

        <Box className="rounded-xl border border-border-subtle bg-surface-raised p-6">
          <Stack space="4">
            <Stack space="2">
              <Text>Primary body text through the Text primitive.</Text>
              <Text tone="secondary">
                Secondary text through semantic tone mapping.
              </Text>
              <Text tone="muted" size="sm">
                Muted supporting text through the same primitive.
              </Text>
            </Stack>

            <Inline space="3" align="center" wrap>
              <Box className="rounded-lg bg-action-primary px-4 py-3 text-action-primaryText">
                Primary action
              </Box>

              <Box className="rounded-lg border border-border-strong bg-surface-sunken px-4 py-3 text-text-primary">
                Secondary container
              </Box>

              <Text tone="secondary" size="sm">
                Inline keeps horizontal rhythm consistent.
              </Text>
            </Inline>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}