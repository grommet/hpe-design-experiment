import { Box, Button, Heading, Image, Text } from "grommet";
import { Share } from "grommet-icons";

type PageType = {
  author?: string;
  title?: string;
  description?: string;
  src?: string;
};

export const DetailPageHeader = ({ page }: { page: PageType }) => {
  return (
    <Box gap="medium">
      <Box width="xsmall">
        <Image src={page.src} alt={`${page.title} logo`} />
      </Box>
      <Box gap="xsmall">
        <Heading level={1} margin="none">
          {page.title}
        </Heading>
        <Text margin="none" size="large">
          {page.author}
        </Text>
      </Box>
      <Box align="start" gap="medium">
        <Button label="Test drive" icon={<Share />} primary reverse />
        <Button label="Contact sales" secondary />
      </Box>
    </Box>
  );
};
