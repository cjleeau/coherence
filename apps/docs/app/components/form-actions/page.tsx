import { Button, FormActions } from "@coherence/components";
import { Box, Heading, Stack, Text } from "@coherence/primitives";

export default function FormActionsComponentPage() {
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
            Coherence / Components / FormActions
          </Text>

          <Heading as="h1" size="xl">
            FormActions
          </Heading>

          <Text size="lg" tone="secondary" className="max-w-2xl">
            FormActions groups related form buttons into a consistent action row,
            typically aligned to the end of a form or section.
          </Text>
        </Stack>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Purpose</Heading>

            <Text tone="secondary">
              Use FormActions to keep submit, cancel, save and continue actions
              grouped consistently rather than scattering buttons throughout a form.
            </Text>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Patterns</Heading>

            <FormActions>
              <Button variant="secondary">Cancel</Button>
              <Button variant="primary">Submit</Button>
            </FormActions>

            <FormActions>
              <Button variant="secondary">Back</Button>
              <Button variant="secondary">Save draft</Button>
              <Button variant="primary">Continue</Button>
            </FormActions>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">When to use</Heading>

            <Stack space="2">
              <Text>• end of forms</Text>
              <Text>• grouped action rows</Text>
              <Text>• save, cancel and submit patterns</Text>
              <Text>• review and continue flows</Text>
            </Stack>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Accessibility</Heading>

            <Stack space="2">
              <Text tone="secondary">
                FormActions exposes an accessible grouped action region.
              </Text>
              <Text tone="secondary">
                Keep primary and secondary action ordering predictable and labels explicit.
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
                    Group related actions together at the end of a section or form.
                  </Text>
                  <Text tone="secondary">
                    Make the primary path obvious.
                  </Text>
                </Stack>
              </Box>

              <Box className="rounded-lg p-4" surface="sunken" border="subtle">
                <Stack space="2">
                  <Text weight="semibold">Don’t</Text>
                  <Text tone="secondary">
                    Don’t spread related buttons across different parts of the form.
                  </Text>
                  <Text tone="secondary">
                    Don’t include multiple competing primary actions in one row.
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