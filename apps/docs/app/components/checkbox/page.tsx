import { Checkbox } from "@coherence/components";
import { Box, Heading, Stack, Text } from "@coherence/primitives";

export default function CheckboxComponentPage() {
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
            Coherence / Components / Checkbox
          </Text>

          <Heading as="h1" size="xl">
            Checkbox
          </Heading>

          <Text size="lg" tone="secondary" className="max-w-2xl">
            Checkbox is the standard component for independent boolean choices,
            consent and confirmation.
          </Text>
        </Stack>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Purpose</Heading>

            <Text tone="secondary">
              Use Checkbox when users need to explicitly opt in, confirm or select
              independent options that are not mutually exclusive.
            </Text>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack className="max-w-xl" space="4">
            <Heading size="lg">States</Heading>

            <Checkbox label="Accept terms and conditions" />

            <Checkbox
              label="Subscribe to updates"
              hint="You can unsubscribe at any time."
            />

            <Checkbox
              label="Validated confirmation"
              error="You must confirm before continuing."
            />

            <Checkbox label="Disabled option" disabled />
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">When to use</Heading>

            <Stack space="2">
              <Text>• accept terms</Text>
              <Text>• subscribe or opt in</Text>
              <Text>• independent settings</Text>
              <Text>• explicit confirmations</Text>
            </Stack>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Accessibility</Heading>

            <Stack space="2">
              <Text tone="secondary">
                Checkbox uses a native checkbox input and connects hint and error
                text with <code>aria-describedby</code>.
              </Text>
              <Text tone="secondary">
                Labels should make both the checked and unchecked states clear.
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
                    Use Checkbox for independent yes or no decisions.
                  </Text>
                  <Text tone="secondary">
                    Keep labels direct and unambiguous.
                  </Text>
                </Stack>
              </Box>

              <Box className="rounded-lg p-4" surface="sunken" border="subtle">
                <Stack space="2">
                  <Text weight="semibold">Don’t</Text>
                  <Text tone="secondary">
                    Don’t use Checkbox where only one choice can be selected.
                  </Text>
                  <Text tone="secondary">
                    Don’t rely on surrounding context instead of a proper label.
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