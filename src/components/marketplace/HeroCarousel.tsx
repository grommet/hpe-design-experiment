import { Box, Button, Heading, Icon, Paragraph, Text } from "grommet-exp";
import linkNext from "grommet-icons/img/link-next.svg";

export const HeroCarousel = () => {
  return (
    <Box direction="row" justify="between" pad={{ bottom: "medium" }}>
      <Box gap="medium">
        <Box gap="xsmall">
          <Text>Compute</Text>
          <Heading level={2} size="large">
            Scale up or down on demand
          </Heading>
        </Box>
        <Paragraph>
          Respond immediately with built-in buffer capacity. HPE will manage the
          capacity with you to add additional resources before they are needed.
        </Paragraph>
        <Box direction="row" gap="small">
          <Button
            label="Test drive"
            icon={<Icon src={linkNext} />}
            kind="secondary"
            reverse
          />
          <Button label="Learn more" />
        </Box>
      </Box>
      <Box>
        <img
          src="/carousel-1.png"
          alt="Man wearing round glasses smiling with red headphones around his neck"
        />
      </Box>
    </Box>
  );
};
