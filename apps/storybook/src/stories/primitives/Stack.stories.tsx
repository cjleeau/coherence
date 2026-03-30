import type { Meta, StoryObj } from "@storybook/react";
import { Box, Stack, Text, Heading } from "@coherence/primitives";

const meta = {
  title: "Primitives/Stack",
  component: Stack,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Stack>;

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
            Primitive / Stack
          </Text>

          <Heading as="h1" size="xl">
            Stack controls vertical layout and spacing
          </Heading>

          <Text size="lg" tone="secondary" className="max-w-2xl">
            Use Stack to arrange elements vertically with consistent spacing
            driven by the token scale.
          </Text>
        </Stack>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Example</Heading>

            <Stack space="3">
              <Box className="rounded-lg p-4" surface="sunken" border="subtle">
                <Text>Item 1</Text>
              </Box>

              <Box className="rounded-lg p-4" surface="sunken" border="subtle">
                <Text>Item 2</Text>
              </Box>

              <Box className="rounded-lg p-4" surface="sunken" border="subtle">
                <Text>Item 3</Text>
              </Box>
            </Stack>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">When to use</Heading>

            <Stack space="2">
              <Text>• vertical layout of elements</Text>
              <Text>• spacing between sections</Text>
              <Text>• form grouping</Text>
              <Text>• replacing manual margin stacking</Text>
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
                    Use Stack instead of manually applying margin-bottom.
                  </Text>
                  <Text tone="secondary">
                    Keep spacing consistent using token values.
                  </Text>
                </Stack>
              </Box>

              <Box className="rounded-lg p-4" surface="sunken" border="subtle">
                <Stack space="2">
                  <Text weight="semibold">Don’t</Text>
                  <Text tone="secondary">
                    Don’t mix Stack spacing with random margins.
                  </Text>
                  <Text tone="secondary">
                    Don’t use Stack for horizontal layout (use Inline).
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

export const SpacingScale: Story = {
  render: () => (
    <Stack space="6">
      <Stack space="1">
        <Text size="sm">space="1"</Text>
        <Box className="rounded-lg p-3" surface="sunken" border="subtle">
          <Text>Item</Text>
        </Box>
        <Box className="rounded-lg p-3" surface="sunken" border="subtle">
          <Text>Item</Text>
        </Box>
      </Stack>

      <Stack space="3">
        <Text size="sm">space="3"</Text>
        <Box className="rounded-lg p-3" surface="sunken" border="subtle">
          <Text>Item</Text>
        </Box>
        <Box className="rounded-lg p-3" surface="sunken" border="subtle">
          <Text>Item</Text>
        </Box>
      </Stack>

      <Stack space="6">
        <Text size="sm">space="6"</Text>
        <Box className="rounded-lg p-3" surface="sunken" border="subtle">
          <Text>Item</Text>
        </Box>
        <Box className="rounded-lg p-3" surface="sunken" border="subtle">
          <Text>Item</Text>
        </Box>
      </Stack>
    </Stack>
  )
};