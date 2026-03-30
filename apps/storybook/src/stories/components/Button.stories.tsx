import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@coherence/components";
import { Box, Heading, Inline, Stack, Text } from "@coherence/primitives";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"],
  args: {
    children: "Button",
    variant: "primary",
    disabled: false
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["primary", "secondary"]
    }
  }
} satisfies Meta<typeof Button>;

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
            Component / Button
          </Text>

          <Heading as="h1" size="xl">
            Button is the primary action component
          </Heading>

          <Text size="lg" tone="secondary" className="max-w-2xl">
            Use Button for primary and secondary actions. It is a native button
            with token-backed styling, disabled handling and keyboard support.
          </Text>
        </Stack>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Example</Heading>

            <Inline space="4" align="center" wrap>
              <Button variant="primary">Primary action</Button>
              <Button variant="secondary">Secondary action</Button>
              <Button variant="secondary" disabled>
                Disabled action
              </Button>
            </Inline>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">When to use</Heading>

            <Stack space="2">
              <Text>• submit or save actions</Text>
              <Text>• confirm or continue actions</Text>
              <Text>• secondary actions such as cancel or back</Text>
              <Text>• grouped action rows</Text>
            </Stack>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Accessibility</Heading>

            <Stack space="2">
              <Text tone="secondary">
                Button is a native <code>button</code> element.
              </Text>
              <Text tone="secondary">
                Use clear action labels and prefer the native disabled state
                rather than custom blocking logic.
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
                    Use Button for real actions and form controls.
                  </Text>
                  <Text tone="secondary">
                    Choose primary or secondary based on action importance.
                  </Text>
                </Stack>
              </Box>

              <Box className="rounded-lg p-4" surface="sunken" border="subtle">
                <Stack space="2">
                  <Text weight="semibold">Don’t</Text>
                  <Text tone="secondary">
                    Don’t use Button as a navigation link when a real link is required.
                  </Text>
                  <Text tone="secondary">
                    Don’t place too many primary buttons in the same group.
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
    <Inline space="4" align="center" wrap>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="secondary" disabled>
        Disabled
      </Button>
    </Inline>
  )
};

export const ActionRow: Story = {
  render: () => (
    <Inline space="3" align="center" wrap>
      <Button variant="secondary">Cancel</Button>
      <Button variant="secondary">Save draft</Button>
      <Button variant="primary">Submit</Button>
    </Inline>
  )
};