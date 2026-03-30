import { Box, Heading, Stack, Text } from "@coherence/primitives";

export default function HeadingPrimitivePage() {
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
            Coherence / Primitives / Heading
          </Text>

          <Heading as="h1" size="4xl">
            Heading
          </Heading>

          <Text size="lg" tone="secondary" className="max-w-2xl">
            Heading defines document structure and hierarchy. It should reflect
            semantic meaning, not just visual styling.
          </Text>
        </Stack>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Purpose</Heading>

            <Text tone="secondary">
              Use Heading to structure content, making it accessible and scannable.
              Each level communicates importance and relationship between sections.
            </Text>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="3">
            <Heading size="lg">Hierarchy example</Heading>

            <Heading as="h1" size="4xl">h1 heading</Heading>
            <Heading as="h2" size="3xl">h2 heading</Heading>
            <Heading as="h3" size="2xl">h3 heading</Heading>
            <Heading as="h4" size="xl">h4 heading</Heading>
            <Heading as="h5" size="lg">h5 heading</Heading>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">When to use</Heading>

            <Stack space="2">
              <Text>• page titles</Text>
              <Text>• section headings</Text>
              <Text>• grouping related content</Text>
              <Text>• long-form content structure</Text>
            </Stack>
          </Stack>
        </Box>

        <Box className="rounded-xl p-6" surface="raised" border="subtle">
          <Stack space="4">
            <Heading size="lg">Accessibility</Heading>

            <Text tone="secondary">
              Always use headings in sequential order. Screen readers rely on
              this structure to navigate content. Avoid skipping levels.
            </Text>
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
                    Maintain logical heading order.
                  </Text>
                  <Text tone="secondary">
                    Use headings to improve readability and structure.
                  </Text>
                </Stack>
              </Box>

              <Box className="rounded-lg p-4" surface="sunken" border="subtle">
                <Stack space="2">
                  <Text weight="semibold">Don’t</Text>
                  <Text tone="secondary">
                    Don’t skip heading levels.
                  </Text>
                  <Text tone="secondary">
                    Don’t use headings purely for visual styling.
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