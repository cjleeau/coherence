import { Select } from "@coherence/components";
import { Box, Heading, Stack, Text } from "@coherence/primitives";

const environmentOptions = [
  { label: "Development", value: "development" },
  { label: "Staging", value: "staging" },
  { label: "Production", value: "production" }
];

export default function SelectComponentPage() {
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
            Coherence / Components / Select
          </Text>

          <Heading as="h1" size="xl">
            Select
          </Heading>

          <Text size="lg" tone="secondary" className="max-w-2xl">
            Select is the standard component for choosing one option from a fixed list.
          </Text>
        </Stack>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Purpose</Heading>

            <Text tone="secondary">
              Use Select when input must come from a predefined set and users can
              choose only one option.
            </Text>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack className="max-w-2xl" space="4">
            <Heading size="lg">States</Heading>

            <Select
              label="Environment"
              options={environmentOptions}
              placeholder="Select an environment"
              defaultValue=""
              hint="Choose the deployment target."
            />

            <Select
              label="Environment"
              options={environmentOptions}
              defaultValue="staging"
            />

            <Select
              label="Release target"
              options={environmentOptions}
              placeholder="Select a target"
              defaultValue=""
              error="Release target is required."
            />

            <Select
              label="Disabled select"
              options={environmentOptions}
              defaultValue="production"
              disabled
            />
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">When to use</Heading>

            <Stack space="2">
              <Text>• one choice from a list</Text>
              <Text>• environments and statuses</Text>
              <Text>• categories and roles</Text>
              <Text>• fixed controlled options</Text>
            </Stack>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Accessibility</Heading>

            <Stack space="2">
              <Text tone="secondary">
                Select uses a native select control with visible label and
                descriptive hint or error associations.
              </Text>
              <Text tone="secondary">
                Keep option labels concise and understandable without extra context.
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
                    Use Select for predefined single-choice input.
                  </Text>
                  <Text tone="secondary">
                    Use placeholders when an explicit selection is required.
                  </Text>
                </Stack>
              </Box>

              <Box className="rounded-lg p-4" surface="sunken" border="subtle">
                <Stack space="2">
                  <Text weight="semibold">Don’t</Text>
                  <Text tone="secondary">
                    Don’t use Select for free-form data entry.
                  </Text>
                  <Text tone="secondary">
                    Don’t use vague or duplicated option labels.
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