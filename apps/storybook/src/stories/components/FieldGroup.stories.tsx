import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, Field, FieldGroup, Select } from "@coherence/components";
import { Box, Heading, Stack, Text } from "@coherence/primitives";

const meta = {
  title: "Components/FieldGroup",
  component: FieldGroup,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"],
  args: {
    title: "Basic fields",
    description: "Single-line inputs for account and project metadata."
  }
} satisfies Meta<typeof FieldGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

const roleOptions = [
  { label: "Designer", value: "designer" },
  { label: "Engineer", value: "engineer" },
  { label: "Product Manager", value: "product-manager" }
];

export const Overview: Story = {
  render: () => (
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
            Component / FieldGroup
          </Text>

          <Heading as="h1" size="xl">
            FieldGroup structures related form controls
          </Heading>

          <Text size="lg" tone="secondary" className="max-w-2xl">
            Use FieldGroup to organize related inputs under a shared title and
            optional description. It provides consistent grouping and spacing.
          </Text>
        </Stack>

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
              <Text>• sections requiring shared description or context</Text>
              <Text>• larger forms with multiple logical parts</Text>
            </Stack>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Accessibility</Heading>

            <Stack space="2">
              <Text tone="secondary">
                FieldGroup uses a labelled section with optional descriptive content
                to provide structure for assistive technologies and visual scanning.
              </Text>
              <Text tone="secondary">
                Titles should describe the group clearly and descriptions should
                explain shared context or expectations.
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
                    Use FieldGroup to create clear sections in longer forms.
                  </Text>
                  <Text tone="secondary">
                    Provide titles and descriptions that help orient the user.
                  </Text>
                </Stack>
              </Box>

              <Box className="rounded-lg p-4" surface="sunken" border="subtle">
                <Stack space="2">
                  <Text weight="semibold">Don’t</Text>
                  <Text tone="secondary">
                    Don’t create groups with unrelated controls mixed together.
                  </Text>
                  <Text tone="secondary">
                    Don’t use FieldGroup when a single standalone field is enough.
                  </Text>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
};

export const Variants: Story = {
  render: () => (
    <Stack className="max-w-3xl" space="5">
      <FieldGroup
        title="Basic fields"
        description="Single-line inputs for account and project metadata."
      >
        <Field label="Email" type="email" placeholder="you@example.com" />
        <Field label="Project name" placeholder="Coherence Design System" />
      </FieldGroup>

      <FieldGroup
        title="Choices"
        description="Boolean and list-based selection patterns."
      >
        <Checkbox label="Accept terms and conditions" />
        <Select
          label="Role"
          options={roleOptions}
          placeholder="Select a role"
          defaultValue=""
        />
      </FieldGroup>
    </Stack>
  )
};