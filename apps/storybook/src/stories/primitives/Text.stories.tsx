import type { Meta, StoryObj } from "@storybook/react";
import { Box, Stack, Text, Heading } from "@coherence/primitives";

const meta = {
  title: "Primitives/Text",
  component: Text,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Text>;

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
            Primitive / Text
          </Text>

          <Heading as="h1" size="xl">
            Text controls body copy, supporting copy and semantic tone
          </Heading>

          <Text size="lg" tone="secondary" className="max-w-2xl">
            Use Text for paragraph content, support copy and inline textual content
            that needs token-backed type scale, weight and tone.
          </Text>
        </Stack>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Example</Heading>

            <Stack space="3">
              <Text>
                Primary body text is the default and should be used for the main
                reading experience.
              </Text>

              <Text tone="secondary">
                Secondary text is suitable for supporting information and labels
                with lower emphasis.
              </Text>

              <Text tone="muted" size="sm">
                Muted small text is suitable for helper content and low-emphasis notes.
              </Text>
            </Stack>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">When to use</Heading>

            <Stack space="2">
              <Text>• paragraph content</Text>
              <Text>• helper and support text</Text>
              <Text>• metadata and labels</Text>
              <Text>• inline content that needs semantic tone</Text>
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
                    Use Text for body copy and supporting content.
                  </Text>
                  <Text tone="secondary">
                    Choose tone and size from the defined contract.
                  </Text>
                </Stack>
              </Box>

              <Box className="rounded-lg p-4" surface="sunken" border="subtle">
                <Stack space="2">
                  <Text weight="semibold">Don’t</Text>
                  <Text tone="secondary">
                    Don’t use Text instead of Heading for document hierarchy.
                  </Text>
                  <Text tone="secondary">
                    Don’t bypass semantic tone with random colour overrides unless required.
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

export const ToneVariants: Story = {
  render: () => (
    <Stack space="4">
      <Text tone="primary">Primary tone</Text>
      <Text tone="secondary">Secondary tone</Text>
      <Text tone="muted">Muted tone</Text>
    </Stack>
  )
};

export const SizeAndWeightVariants: Story = {
  render: () => (
    <Stack space="4">
      <Text size="sm" weight="regular">
        Small regular text
      </Text>

      <Text size="md" weight="medium">
        Medium weight text
      </Text>

      <Text size="lg" weight="semibold">
        Large semibold text
      </Text>
    </Stack>
  )
};

export const SemanticElementUsage: Story = {
  render: () => (
    <Stack space="4">
      <Text as="p">Rendered as paragraph</Text>
      <Text as="span" tone="secondary">
        Rendered as span
      </Text>
      <Text as="label" weight="medium">
        Rendered as label
      </Text>
    </Stack>
  )
};