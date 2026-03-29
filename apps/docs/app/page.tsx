"use client";

import { useEffect, useState } from "react";
import { Button } from "@coherence/components";
import { Box, Text, Heading, Stack, Inline } from "@coherence/primitives";

const THEMES = ["light", "dark", "hc-light", "hc-dark"] as const;
type Theme = (typeof THEMES)[number];

export default function Page() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Box
      className="min-h-screen p-8"
      surface="base"
      style={{
        color: "var(--text-primary)",
        fontFamily: "var(--font-family-sans)"
      }}
    >
      <Stack className="mx-auto max-w-3xl" space="8">
        <Stack as="header" space="4">
          <Text size="sm" tone="secondary">
            Coherence / Components v1
          </Text>

          <Heading as="h1" size="xl">
            First component: Button
          </Heading>

          <Text size="lg" tone="secondary" className="max-w-2xl">
            This validates the first component layer using native button behaviour
            and token styling on top of the primitive foundation.
          </Text>
        </Stack>

        <Inline space="3" wrap>
          {THEMES.map((t) => {
            const active = t === theme;

            return (
              <Button
                key={t}
                onClick={() => setTheme(t)}
                variant={active ? "primary" : "secondary"}
              >
                {t}
              </Button>
            );
          })}

          <Button variant="secondary" disabled>
            Disabled
          </Button>
        </Inline>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="6">
            <Stack space="3">
              <Text>Primary body text through the Text primitive.</Text>

              <Text tone="secondary">
                Secondary text through semantic tone mapping.
              </Text>

              <Text tone="muted" size="sm">
                Muted supporting text through the same primitive.
              </Text>
            </Stack>

            <Stack space="2">
              <Heading size="4xl">Heading 4xl</Heading>
              <Heading size="3xl">Heading 3xl</Heading>
              <Heading size="2xl">Heading 2xl</Heading>
              <Heading size="xl">Heading xl</Heading>
              <Heading size="lg">Heading lg</Heading>
            </Stack>

            <Inline space="4" align="center" wrap>
              <Button variant="primary">Primary</Button>

              <Button variant="secondary">Secondary</Button>

              <Box
                className="rounded-lg px-4 py-3"
                surface="sunken"
                border="strong"
                style={{ color: "var(--text-primary)" }}
              >
                Container
              </Box>

              <Text tone="secondary" size="sm">
                Inline layout validation.
              </Text>
            </Inline>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}