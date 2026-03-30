import type { Meta, StoryObj } from "@storybook/react";
import { Button, FormActions } from "@coherence/components";
import { Box, Heading, Stack, Text } from "@coherence/primitives";

const meta = {
  title: "Components/FormActions",
  component: FormActions,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof FormActions>;

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
            Component / FormActions
          </Text>

          <Heading as="h1" size="xl">
            FormActions aligns and groups form action buttons
          </Heading>

          <Text size="lg" tone="secondary" className="max-w-2xl">
            Use FormActions to present related form actions in a consistent row,
            usually aligned to the end of a form or grouped section.
          </Text>
        </Stack>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Example</Heading>

            <FormActions>
              <Button variant="secondary">Cancel</Button>
              <Button variant="secondary">Save draft</Button>
              <Button variant="primary">Submit</Button>
            </FormActions>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">When to use</Heading>

            <Stack space="2">
              <Text>• end of forms</Text>
              <Text>• grouped button rows</Text>
              <Text>• submit and cancel action sets</Text>
              <Text>• save and continue patterns</Text>
            </Stack>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Accessibility</Heading>

            <Stack space="2">
              <Text tone="secondary">
                FormActions exposes a grouped action region with an accessible label.
              </Text>
              <Text tone="secondary">
                Keep button order and labelling clear so users understand the
                primary path and any secondary alternatives.
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
                    Group related actions together and keep primary action clear.
                  </Text>
                  <Text tone="secondary">
                    Use a predictable order for secondary and primary actions.
                  </Text>
                </Stack>
              </Box>

              <Box className="rounded-lg p-4" surface="sunken" border="subtle">
                <Stack space="2">
                  <Text weight="semibold">Don’t</Text>
                  <Text tone="secondary">
                    Don’t scatter related action buttons across the form.
                  </Text>
                  <Text tone="secondary">
                    Don’t create multiple competing primary actions in one row.
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

export const Patterns: Story = {
  render: () => (
    <Stack className="max-w-3xl" space="5">
      <FormActions>
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Submit</Button>
      </FormActions>

      <FormActions>
        <Button variant="secondary">Back</Button>
        <Button variant="secondary">Save draft</Button>
        <Button variant="primary">Continue</Button>
      </FormActions>
    </Stack>
  )
};