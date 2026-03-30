import { Checkbox, Field, FieldGroup, Select } from "@coherence/components";
import { Box, Heading, Stack, Text } from "@coherence/primitives";

const roleOptions = [
  { label: "Designer", value: "designer" },
  { label: "Engineer", value: "engineer" },
  { label: "Product Manager", value: "product-manager" }
];

export default function FieldGroupComponentPage() {
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
            Coherence / Components / FieldGroup
          </Text>

          <Heading as="h1" size="xl">
            FieldGroup
          </Heading>

          <Text size="lg" tone="secondary" className="max-w-2xl">
            FieldGroup organizes related controls into a labelled section with
            optional shared description and consistent spacing.
          </Text>
        </Stack>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Purpose</Heading>

            <Text tone="secondary">
              Use FieldGroup to structure longer forms into clear logical sections
              so users can understand context and complete related inputs together.
            </Text>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <FieldGroup
            title="Basic fields"
            description="Single-line inputs for account and project metadata."
          >
            <Field
              label="Email"
              type="email"
              placeholder="you@example.com"
              hint="Use your work email address."
            />

            <Field
              label="Project name"
              placeholder="Coherence Design System"
              defaultValue="Coherence"
            />

            <Select
              label="Role"
              options={roleOptions}
              placeholder="Select a role"
              defaultValue=""
            />

            <Checkbox label="Subscribe to updates" />
          </FieldGroup>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">When to use</Heading>

            <Stack space="2">
              <Text>• form sections</Text>
              <Text>• grouped related inputs</Text>
              <Text>• multi-step or multi-topic forms</Text>
              <Text>• shared explanatory context for multiple controls</Text>
            </Stack>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Accessibility</Heading>

            <Stack space="2">
              <Text tone="secondary">
                FieldGroup exposes a labelled section with optional description
                so grouped controls have clearer structure and context.
              </Text>
              <Text tone="secondary">
                Titles should describe the group clearly and descriptions should
                communicate what unifies the controls inside.
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
                    Group related controls into meaningful sections.
                  </Text>
                  <Text tone="secondary">
                    Use descriptions to explain the intent of the group.
                  </Text>
                </Stack>
              </Box>

              <Box className="rounded-lg p-4" surface="sunken" border="subtle">
                <Stack space="2">
                  <Text weight="semibold">Don’t</Text>
                  <Text tone="secondary">
                    Don’t mix unrelated controls into the same group.
                  </Text>
                  <Text tone="secondary">
                    Don’t create a FieldGroup when a single standalone field is enough.
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