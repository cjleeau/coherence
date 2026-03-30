import { Button } from "@coherence/components";
import { Box, Heading, Inline, Stack, Text } from "@coherence/primitives";

export default function ButtonComponentPage() {
  return (
    <Box
      className="min-h-screen p-8"
      surface="base"
      style={{
        color: "var(--text-primary)",
        fontFamily: "var(--font-family-sans)"
      }}
    >
      <Stack className="mx-auto max-w-4xl" space="8">
        <Stack as="header" space="4">
          <Text size="sm" tone="secondary">
            Coherence / Components / Button
          </Text>

          <Heading as="h1" size="xl">
            Button
          </Heading>

          <Text size="lg" tone="secondary" className="max-w-2xl">
            Button is the standard action component for primary and secondary
            user actions. It uses native button behaviour and token-backed styling.
          </Text>
        </Stack>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Purpose</Heading>

            <Text tone="secondary">
              Use Button for actions such as submit, save, continue, cancel and
              confirm. Prefer clear labels that describe the result of clicking.
            </Text>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Variants</Heading>

            <Inline space="4" align="center" wrap>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="secondary" disabled>
                Disabled
              </Button>
            </Inline>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">When to use</Heading>

            <Stack space="2">
              <Text>• primary call to action</Text>
              <Text>• secondary actions in forms and flows</Text>
              <Text>• grouped action rows</Text>
              <Text>• explicit user-triggered actions</Text>
            </Stack>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Accessibility</Heading>

            <Stack space="2">
              <Text tone="secondary">
                Button uses a native <code>button</code> element, so keyboard
                interaction and disabled behaviour are preserved.
              </Text>
              <Text tone="secondary">
                Keep labels clear and action-oriented. Avoid vague labels such as
                “OK” when a more specific label is possible.
              </Text>
            </Stack>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Do / Don’t</Heading>

            <Stack space="4">
              <Box className="rounded-lg p-4" surface="sunken" border="subtle">
                <Stack space="2">
                  <Text weight="semibold">Do</Text>
                  <Text tone="secondary">
                    Use one clear primary action per major action group.
                  </Text>
                  <Text tone="secondary">
                    Use the disabled state when submission is not currently allowed.
                  </Text>
                </Stack>
              </Box>

              <Box className="rounded-lg p-4" surface="sunken" border="subtle">
                <Stack space="2">
                  <Text weight="semibold">Don’t</Text>
                  <Text tone="secondary">
                    Don’t use Button for navigation when a link is the right element.
                  </Text>
                  <Text tone="secondary">
                    Don’t create multiple competing primary buttons in the same group.
                  </Text>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}