import type { Meta, StoryObj } from "@storybook/react";
import { Box, Inline, Stack, Text, Heading } from "@coherence/primitives";

const meta = {
  title: "Primitives/Box",
  component: Box,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"],
  args: {
    children: "Box content"
  }
} satisfies Meta<typeof Box>;

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
            Coherence / Storybook
          </Text>

          <Heading as="h1" size="xl">
            Primitives overview
          </Heading>

          <Text size="lg" tone="secondary">
            Structural and typography primitives validated against token-backed styling.
          </Text>
        </Stack>

        <Inline space="4" align="center" wrap>
          <Box className="rounded-lg px-4 py-3" surface="raised" border="subtle">
            <Text>Box</Text>
          </Box>

          <Box className="rounded-lg px-4 py-3" surface="sunken" border="strong">
            <Text tone="secondary">Inline</Text>
          </Box>

          <Text tone="muted" size="sm">
            Text primitive
          </Text>
        </Inline>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="3">
            <Heading size="4xl">Heading 4xl</Heading>
            <Heading size="3xl">Heading 3xl</Heading>
            <Heading size="2xl">Heading 2xl</Heading>
            <Heading size="xl">Heading xl</Heading>
            <Heading size="lg">Heading lg</Heading>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
};

export const SurfaceVariants: Story = {
  render: () => (
    <Inline space="4" align="start" wrap>
      <Box className="rounded-xl p-5 min-w-[180px]" surface="base" border="subtle">
        <Text>base + subtle</Text>
      </Box>

      <Box className="rounded-xl p-5 min-w-[180px]" surface="raised" border="subtle">
        <Text>raised + subtle</Text>
      </Box>

      <Box className="rounded-xl p-5 min-w-[180px]" surface="sunken" border="strong">
        <Text>sunken + strong</Text>
      </Box>

      <Box
        className="rounded-xl p-5 min-w-[180px]"
        surface="inverse"
        border="inverse"
        style={{ color: "var(--text-inverse)" }}
      >
        <Text style={{ color: "var(--text-inverse)" }}>inverse + inverse</Text>
      </Box>
    </Inline>
  )
};

export const SemanticElementUsage: Story = {
  render: () => (
    <Stack space="4">
      <Box as="section" className="rounded-xl p-5" surface="raised" border="subtle">
        <Text>Rendered as section</Text>
      </Box>

      <Box as="article" className="rounded-xl p-5" surface="sunken" border="strong">
        <Text>Rendered as article</Text>
      </Box>

      <Box as="aside" className="rounded-xl p-5" surface="raised" border="subtle">
        <Text>Rendered as aside</Text>
      </Box>
    </Stack>
  )
};