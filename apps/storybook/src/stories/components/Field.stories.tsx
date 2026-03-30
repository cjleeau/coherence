import type { Meta, StoryObj } from "@storybook/react";
import { Field } from "@coherence/components";
import { Box, Heading, Stack, Text } from "@coherence/primitives";

const meta = {
  title: "Components/Field",
  component: Field,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"],
  args: {
    label: "Email",
    type: "email",
    placeholder: "you@example.com"
  }
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

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
            Component / Field
          </Text>

          <Heading as="h1" size="xl">
            Field is the standard single-line input component
          </Heading>

          <Text size="lg" tone="secondary" className="max-w-2xl">
            Use Field for text, email, numeric and other single-line entry.
            It provides label, hint, error and disabled support with accessible
            relationships between them.
          </Text>
        </Stack>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Example</Heading>

            <Field
              label="Email"
              type="email"
              placeholder="you@example.com"
              hint="Use your work email address."
            />
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">When to use</Heading>

            <Stack space="2">
              <Text>• text entry</Text>
              <Text>• email and numeric values</Text>
              <Text>• identifiers and names</Text>
              <Text>• metadata capture in forms</Text>
            </Stack>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Accessibility</Heading>

            <Stack space="2">
              <Text tone="secondary">
                Field creates a real label-to-input relationship and connects
                hint and error content with <code>aria-describedby</code>.
              </Text>
              <Text tone="secondary">
                Use clear labels and reserve placeholder text for examples,
                not as the only identifier.
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
                    Provide a clear label for every field.
                  </Text>
                  <Text tone="secondary">
                    Use hint and error text to guide successful completion.
                  </Text>
                </Stack>
              </Box>

              <Box className="rounded-lg p-4" surface="sunken" border="subtle">
                <Stack space="2">
                  <Text weight="semibold">Don’t</Text>
                  <Text tone="secondary">
                    Don’t rely on placeholder text alone.
                  </Text>
                  <Text tone="secondary">
                    Don’t overload a single field with multiple meanings.
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
  render: () => (
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
  )
};

export const ValueExamples: Story = {
  render: () => (
    <Stack className="max-w-xl" space="4">
      <Field
        label="Project name"
        defaultValue="Coherence"
      />

      <Field
        label="Email"
        type="email"
        defaultValue="team@example.com"
      />

      <Field
        label="Reference"
        placeholder="Enter a reference"
      />
    </Stack>
  )
};