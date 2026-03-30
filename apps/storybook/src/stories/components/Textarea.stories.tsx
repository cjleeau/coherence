import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@coherence/components";
import { Box, Heading, Stack, Text } from "@coherence/primitives";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"],
  args: {
    label: "Project summary",
    placeholder: "Write a short summary..."
  }
} satisfies Meta<typeof Textarea>;

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
            Component / Textarea
          </Text>

          <Heading as="h1" size="xl">
            Textarea handles long-form input
          </Heading>

          <Text size="lg" tone="secondary" className="max-w-2xl">
            Use Textarea for descriptions, notes and multi-line content entry.
            It supports label, hint, error, disabled and row sizing.
          </Text>
        </Stack>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Example</Heading>

            <Stack className="max-w-2xl" space="4">
              <Textarea
                label="Project summary"
                placeholder="Write a short summary..."
                hint="Keep it brief and clear."
              />

              <Textarea
                label="Implementation notes"
                defaultValue="Primitive layer complete. Components now in progress."
                rows={5}
              />

              <Textarea
                label="Risk notes"
                placeholder="Document any issues here..."
                error="Risk notes are required."
              />

              <Textarea
                label="Disabled notes"
                placeholder="Unavailable"
                disabled
              />
            </Stack>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">When to use</Heading>

            <Stack space="2">
              <Text>• project summaries</Text>
              <Text>• implementation notes</Text>
              <Text>• descriptions and comments</Text>
              <Text>• any input that exceeds a single line</Text>
            </Stack>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Accessibility</Heading>

            <Stack space="2">
              <Text tone="secondary">
                Textarea creates a label-to-control relationship and connects
                hint and error content with <code>aria-describedby</code>.
              </Text>
              <Text tone="secondary">
                Use the label to describe the expected content, not just the topic.
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
                    Use Textarea for content that naturally spans multiple lines.
                  </Text>
                  <Text tone="secondary">
                    Provide hints when the expected level of detail is unclear.
                  </Text>
                </Stack>
              </Box>

              <Box className="rounded-lg p-4" surface="sunken" border="subtle">
                <Stack space="2">
                  <Text weight="semibold">Don’t</Text>
                  <Text tone="secondary">
                    Don’t use Textarea for short, structured values that belong in Field.
                  </Text>
                  <Text tone="secondary">
                    Don’t leave users guessing how much detail is required.
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
    <Stack className="max-w-2xl" space="4">
      <Textarea
        label="Project summary"
        placeholder="Write a short summary..."
        hint="Keep it brief and clear."
      />

      <Textarea
        label="Implementation notes"
        defaultValue="Primitive layer complete. Components now in progress."
        rows={5}
      />

      <Textarea
        label="Risk notes"
        placeholder="Document any issues here..."
        error="Risk notes are required."
      />

      <Textarea
        label="Disabled notes"
        placeholder="Unavailable"
        disabled
      />
    </Stack>
  )
};