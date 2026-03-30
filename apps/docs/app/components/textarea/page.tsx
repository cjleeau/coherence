import { Textarea } from "@coherence/components";
import { Box, Heading, Stack, Text } from "@coherence/primitives";

export default function TextareaComponentPage() {
  return (
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
            Coherence / Components / Textarea
          </Text>

          <Heading as="h1" size="xl">
            Textarea
          </Heading>

          <Text size="lg" tone="secondary" className="max-w-2xl">
            Textarea is the standard component for multi-line input such as notes,
            descriptions and long-form text entry.
          </Text>
        </Stack>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Purpose</Heading>

            <Text tone="secondary">
              Use Textarea when input is expected to span multiple lines and when
              a single-line field would not provide enough room or context.
            </Text>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack className="max-w-2xl" space="4">
            <Heading size="lg">States</Heading>

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
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">When to use</Heading>

            <Stack space="2">
              <Text>• summaries and descriptions</Text>
              <Text>• notes and comments</Text>
              <Text>• implementation details</Text>
              <Text>• any content that needs multiple lines</Text>
            </Stack>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Accessibility</Heading>

            <Stack space="2">
              <Text tone="secondary">
                Textarea uses a visible label and connects hint and error text
                via <code>aria-describedby</code>.
              </Text>
              <Text tone="secondary">
                Provide clear guidance when users may be unsure how much detail is needed.
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
                    Use Textarea for content that naturally spans several lines.
                  </Text>
                  <Text tone="secondary">
                    Provide hints when the expected depth or format is not obvious.
                  </Text>
                </Stack>
              </Box>

              <Box className="rounded-lg p-4" surface="sunken" border="subtle">
                <Stack space="2">
                  <Text weight="semibold">Don’t</Text>
                  <Text tone="secondary">
                    Don’t use Textarea for short structured values.
                  </Text>
                  <Text tone="secondary">
                    Don’t leave users guessing about the expected response.
                  </Text>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}