import { Box, Button, Heading, Text } from "grommet-exp";
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
        <img src={page.src} alt={`${page.title} logo`} />
      </Box>
      <Box gap="xsmall">
        <Heading level={1}>{page.title}</Heading>
        <Text size="large">{page.author}</Text>
      </Box>
      <Box align="start" gap="medium">
        <Button label="Test drive" icon={<Share />} kind="primary" reverse />
        <Button label="Contact sales" kind="secondary" />
      </Box>
    </Box>
  );
};
