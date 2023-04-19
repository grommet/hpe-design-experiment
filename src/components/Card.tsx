import { Box, Heading, Paragraph, Text } from "grommet";
import { nameToSlug } from "../utils";
import { Link } from "react-router-dom";

export const Card = ({
  data: { title, author, description, src },
  level,
}: {
  data: {
    title: string;
    author?: string;
    description?: string;
    src?: string;
  };
  level?: 1 | 2 | 3 | 4;
}) => (
  <Link
    to={`/${nameToSlug(title)}`}
    style={{ textDecoration: "none", color: "inherit" }}
  >
    <Box background="background-front" gap="small">
      <Box direction="row" align="start" justify="start" gap="medium">
        <Box flex={false}>
          <img src={src} alt={`${title} logo`} />
        </Box>
        <Box gap="small">
          <Box gap="xsmall">
            <Heading margin="none" level={level}>
              {title}
            </Heading>
            <Text size="xsmall" color="weak">
              {author}
            </Text>
          </Box>
          <Paragraph margin="none">{description}</Paragraph>
        </Box>
      </Box>
    </Box>
  </Link>
);
