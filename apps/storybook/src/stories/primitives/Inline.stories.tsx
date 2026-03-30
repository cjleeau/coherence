import type { Meta, StoryObj } from "@storybook/react";
import { Box, Inline, Stack, Text, Heading } from "@coherence/primitives";

const meta = {
  title: "Primitives/Inline",
  component: Inline,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Inline>;

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
            Primitive / Inline
          </Text>

          <Heading as="h1" size="xl">
            Inline controls horizontal layout and spacing
          </Heading>

          <Text size="lg" tone="secondary" className="max-w-2xl">
            Use Inline to arrange elements horizontally with consistent spacing,
            alignment and optional wrapping.
          </Text>
        </Stack>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Example</Heading>

            <Inline space="3" align="center" wrap>
              <Box className="rounded-lg px-4 py-3" surface="sunken" border="subtle">
                <Text>Item 1</Text>
              </Box>

              <Box className="rounded-lg px-4 py-3" surface="sunken" border="subtle">
                <Text>Item 2</Text>
              </Box>

              <Box className="rounded-lg px-4 py-3" surface="sunken" border="subtle">
                <Text>Item 3</Text>
              </Box>
            </Inline>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">When to use</Heading>

            <Stack space="2">
              <Text>• horizontal control groups</Text>
              <Text>• button rows</Text>
              <Text>• tags or badges</Text>
              <Text>• compact aligned content</Text>
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
                    Use Inline for horizontal spacing and alignment.
                  </Text>
                  <Text tone="secondary">
                    Enable wrapping where content length may vary.
                  </Text>
                </Stack>
              </Box>

              <Box className="rounded-lg p-4" surface="sunken" border="subtle">
                <Stack space="2">
                  <Text weight="semibold">Don’t</Text>
                  <Text tone="secondary">
                    Don’t use Inline for vertical stacking.
                  </Text>
                  <Text tone="secondary">
                    Don’t combine it with random horizontal margins.
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

export const AlignmentVariants: Story = {
  render: () => (
    <Stack space="6">
      <Stack space="2">
        <Text size="sm">align="start"</Text>
        <Inline space="3" align="start">
          <Box className="rounded-lg px-4 py-2" surface="sunken" border="subtle">
            <Text>Short</Text>
          </Box>
          <Box className="rounded-lg px-4 py-6" surface="sunken" border="subtle">
            <Text>Tall</Text>
          </Box>
          <Box className="rounded-lg px-4 py-3" surface="sunken" border="subtle">
            <Text>Medium</Text>
          </Box>
        </Inline>
      </Stack>

      <Stack space="2">
        <Text size="sm">align="center"</Text>
        <Inline space="3" align="center">
          <Box className="rounded-lg px-4 py-2" surface="sunken" border="subtle">
            <Text>Short</Text>
          </Box>
          <Box className="rounded-lg px-4 py-6" surface="sunken" border="subtle">
            <Text>Tall</Text>
          </Box>
          <Box className="rounded-lg px-4 py-3" surface="sunken" border="subtle">
            <Text>Medium</Text>
          </Box>
        </Inline>
      </Stack>

      <Stack space="2">
        <Text size="sm">align="end"</Text>
        <Inline space="3" align="end">
          <Box className="rounded-lg px-4 py-2" surface="sunken" border="subtle">
            <Text>Short</Text>
          </Box>
          <Box className="rounded-lg px-4 py-6" surface="sunken" border="subtle">
            <Text>Tall</Text>
          </Box>
          <Box className="rounded-lg px-4 py-3" surface="sunken" border="subtle">
            <Text>Medium</Text>
          </Box>
        </Inline>
      </Stack>
    </Stack>
  )
};

export const WrappingBehaviour: Story = {
  render: () => (
    <Box className="max-w-[420px] rounded-xl p-6" surface="raised" border="subtle">
      <Stack space="3">
        <Text size="sm" tone="secondary">
          wrap=true
        </Text>

        <Inline space="3" wrap>
          <Box className="rounded-lg px-4 py-2" surface="sunken" border="subtle">
            <Text>Alpha</Text>
          </Box>
          <Box className="rounded-lg px-4 py-2" surface="sunken" border="subtle">
            <Text>Beta</Text>
          </Box>
          <Box className="rounded-lg px-4 py-2" surface="sunken" border="subtle">
            <Text>Gamma</Text>
          </Box>
          <Box className="rounded-lg px-4 py-2" surface="sunken" border="subtle">
            <Text>Delta</Text>
          </Box>
          <Box className="rounded-lg px-4 py-2" surface="sunken" border="subtle">
            <Text>Epsilon</Text>
          </Box>
          <Box className="rounded-lg px-4 py-2" surface="sunken" border="subtle">
            <Text>Zeta</Text>
          </Box>
        </Inline>
      </Stack>
    </Box>
  )
};