import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@coherence/components";
import { Box, Heading, Stack, Text } from "@coherence/primitives";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"],
  args: {
    label: "Accept terms and conditions",
    disabled: false
  }
} satisfies Meta<typeof Checkbox>;

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
            Component / Checkbox
          </Text>

          <Heading as="h1" size="xl">
            Checkbox handles boolean selection
          </Heading>

          <Text size="lg" tone="secondary" className="max-w-2xl">
            Use Checkbox for independent yes or no selections. It supports label,
            hint, error and disabled states with accessible relationships.
          </Text>
        </Stack>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Example</Heading>

            <Stack space="4">
              <Checkbox label="Accept terms and conditions" />
              <Checkbox
                label="Subscribe to updates"
                hint="You can unsubscribe at any time."
              />
              <Checkbox
                label="Validated confirmation"
                error="You must confirm before continuing."
              />
              <Checkbox label="Disabled option" disabled />
            </Stack>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">When to use</Heading>

            <Stack space="2">
              <Text>• consent and confirmation</Text>
              <Text>• independent boolean choices</Text>
              <Text>• optional settings</Text>
              <Text>• preference toggles with explicit labels</Text>
            </Stack>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Accessibility</Heading>

            <Stack space="2">
              <Text tone="secondary">
                Checkbox uses a native <code>input type="checkbox"</code> and
                connects hint and error content through <code>aria-describedby</code>.
              </Text>
              <Text tone="secondary">
                Labels should clearly describe the meaning of checked and unchecked states.
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
                    Use Checkbox for independent on or off decisions.
                  </Text>
                  <Text tone="secondary">
                    Keep labels short, specific and action-oriented.
                  </Text>
                </Stack>
              </Box>

              <Box className="rounded-lg p-4" surface="sunken" border="subtle">
                <Stack space="2">
                  <Text weight="semibold">Don’t</Text>
                  <Text tone="secondary">
                    Don’t use Checkbox where users must choose exactly one option.
                  </Text>
                  <Text tone="secondary">
                    Don’t rely on surrounding copy instead of a direct label.
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
      <Checkbox label="Unchecked checkbox" />
      <Checkbox label="Checked checkbox" defaultChecked />
      <Checkbox
        label="Checkbox with hint"
        hint="This is additional supporting guidance."
      />
      <Checkbox
        label="Checkbox with error"
        error="You must confirm before continuing."
      />
      <Checkbox label="Disabled checkbox" disabled />
    </Stack>
  )
};