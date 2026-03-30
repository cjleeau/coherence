import { Field } from "@coherence/components";
import { Box, Heading, Stack, Text } from "@coherence/primitives";

export default function FieldComponentPage() {
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
            Coherence / Components / Field
          </Text>

          <Heading as="h1" size="xl">
            Field
          </Heading>

          <Text size="lg" tone="secondary" className="max-w-2xl">
            Field is the standard single-line input component for text, email,
            identifiers and similar form content.
          </Text>
        </Stack>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Purpose</Heading>

            <Text tone="secondary">
              Use Field for single-line user input. It supports label, hint,
              error and disabled states with accessible relationships.
            </Text>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">States</Heading>

            <Stack className="max-w-xl" space="4">
              <Field
                label="Email"
                type="email"
                placeholder="you@example.com"
                hint="Use your work email address."
              />

              <Field
                label="Account ID"
                placeholder="Enter account ID"
                error="Account ID is required."
              />

              <Field
                label="Disabled field"
                placeholder="Unavailable"
                disabled
                hint="This field is currently disabled."
              />
            </Stack>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">When to use</Heading>

            <Stack space="2">
              <Text>• names and labels</Text>
              <Text>• email addresses</Text>
              <Text>• account identifiers</Text>
              <Text>• structured single-line text input</Text>
            </Stack>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Accessibility</Heading>

            <Stack space="2">
              <Text tone="secondary">
                Field creates a label-to-input relationship and connects hint
                and error content through <code>aria-describedby</code>.
              </Text>
              <Text tone="secondary">
                Always provide a visible label and use placeholder text only as
                an example, not as the sole identifier.
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
                    Use clear labels and guidance where needed.
                  </Text>
                  <Text tone="secondary">
                    Show errors near the field they relate to.
                  </Text>
                </Stack>
              </Box>

              <Box className="rounded-lg p-4" surface="sunken" border="subtle">
                <Stack space="2">
                  <Text weight="semibold">Don’t</Text>
                  <Text tone="secondary">
                    Don’t use placeholder text as the only label.
                  </Text>
                  <Text tone="secondary">
                    Don’t overload a field with multiple meanings.
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