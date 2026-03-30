import type { Meta, StoryObj } from "@storybook/react";
import { Box, Stack, Heading, Text } from "@coherence/primitives";

const meta = {
  title: "Primitives/Heading",
  component: Heading,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Heading>;

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
            Primitive / Heading
          </Text>

          <Heading as="h1" size="4xl">
            Heading defines document hierarchy and structure
          </Heading>

          <Text size="lg" tone="secondary" className="max-w-2xl">
            Use Heading to establish clear hierarchy and semantic structure.
            Heading is not visual decoration — it represents document meaning.
          </Text>
        </Stack>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Example hierarchy</Heading>

            <Stack space="2">
              <Heading as="h1" size="4xl">Heading h1</Heading>
              <Heading as="h2" size="3xl">Heading h2</Heading>
              <Heading as="h3" size="2xl">Heading h3</Heading>
              <Heading as="h4" size="xl">Heading h4</Heading>
              <Heading as="h5" size="lg">Heading h5</Heading>
            </Stack>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">When to use</Heading>

            <Stack space="2">
              <Text>• page titles</Text>
              <Text>• section headings</Text>
              <Text>• content hierarchy</Text>
              <Text>• structuring long-form content</Text>
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
                    Use headings in logical order (h1 → h2 → h3).
                  </Text>
                  <Text tone="secondary">
                    Match heading level to document structure, not visual size alone.
                  </Text>
                </Stack>
              </Box>

              <Box className="rounded-lg p-4" surface="sunken" border="subtle">
                <Stack space="2">
                  <Text weight="semibold">Don’t</Text>
                  <Text tone="secondary">
                    Don’t skip heading levels for styling.
                  </Text>
                  <Text tone="secondary">
                    Don’t use Heading as a visual substitute for Text.
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

export const SizeScale: Story = {
  render: () => (
    <Stack space="3">
      <Heading size="4xl">4xl heading</Heading>
      <Heading size="3xl">3xl heading</Heading>
      <Heading size="2xl">2xl heading</Heading>
      <Heading size="xl">xl heading</Heading>
      <Heading size="lg">lg heading</Heading>
    </Stack>
  )
};

export const SemanticControl: Story = {
  render: () => (
    <Stack space="3">
      <Heading as="h1" size="2xl">Rendered as h1</Heading>
      <Heading as="h2" size="2xl">Rendered as h2</Heading>
      <Heading as="h3" size="2xl">Rendered as h3</Heading>
    </Stack>
  )
};