import { Box, Button, Heading, Image, Paragraph, Text } from "grommet";
import { LinkNext } from "grommet-icons";

export const HeroCarousel = () => {
  return (
    <Box direction="row" justify="between" pad={{ bottom: "medium" }}>
      <Box>
        <Text>Compute</Text>
        <Heading margin="none" level={2} size="large">
          Scale up or down on demand
        </Heading>
        <Paragraph>
          Respond immediately with built-in buffer capacity. HPE will manage the
          capacity with you to add additional resources before they are needed.
        </Paragraph>
        <Box direction="row" gap="small">
          <Button label="Test drive" icon={<LinkNext />} secondary reverse />
          <Button label="Learn more" />
        </Box>
      </Box>
      <Box>
        <Image
          src="/carousel-1.png"
          alt="Man wearing round glasses smiling with red headphones around his neck"
        />
      </Box>
    </Box>
  );
};
