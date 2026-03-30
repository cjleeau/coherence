import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "@coherence/components";
import { Box, Heading, Stack, Text } from "@coherence/primitives";

const environmentOptions = [
  { label: "Development", value: "development" },
  { label: "Staging", value: "staging" },
  { label: "Production", value: "production" }
];

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"],
  args: {
    label: "Environment",
    options: environmentOptions,
    placeholder: "Select an environment",
    defaultValue: ""
  }
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  args: {
    label: "Environment",
    options: environmentOptions,
    placeholder: "Select an environment",
    defaultValue: ""
  },
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
            Component / Select
          </Text>

          <Heading as="h1" size="xl">
            Select handles single-choice selection from a list
          </Heading>

          <Text size="lg" tone="secondary" className="max-w-2xl">
            Use Select when users must choose one option from a predefined set.
            It supports label, hint, error, placeholder and disabled states.
          </Text>
        </Stack>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack className="max-w-2xl" space="4">
            <Heading size="lg">Example</Heading>

            <Select
              label="Environment"
              options={environmentOptions}
              placeholder="Select an environment"
              defaultValue=""
              hint="Choose the deployment target."
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
                Select uses a native <code>select</code> element with a visible label
                and descriptive hint or error associations via <code>aria-describedby</code>.
              </Text>
              <Text tone="secondary">
                Use option labels that are clear on their own and keep placeholder
                text descriptive.
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
                    Use Select for single-choice options from a fixed list.
                  </Text>
                  <Text tone="secondary">
                    Include a placeholder when no value is selected by default.
                  </Text>
                </Stack>
              </Box>

              <Box className="rounded-lg p-4" surface="sunken" border="subtle">
                <Stack space="2">
                  <Text weight="semibold">Don’t</Text>
                  <Text tone="secondary">
                    Don’t use Select for free-form entry.
                  </Text>
                  <Text tone="secondary">
                    Don’t use unclear option labels that require outside context.
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

export const States: Story = {
  args: {
    label: "Environment",
    options: environmentOptions,
    placeholder: "Select an environment",
    defaultValue: ""
  },
  render: () => (
    <Stack className="max-w-2xl" space="4">
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
  )
};