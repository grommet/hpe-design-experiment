import { Box, Heading, Paragraph, Text } from "grommet-exp";
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
  level?: 1 | 2 | 3;
}) => (
  <Link
    to={`/${nameToSlug(title)}`}
    style={{ textDecoration: "none", color: "inherit" }}
  >
    <Box gap="small">
      <Box direction="row" align="start" justify="start" gap="medium">
        <Box flex={false}>
          <img src={src} alt={`${title} logo`} />
        </Box>
        <Box gap="small">
          <Box>
            <Heading level={level}>{title}</Heading>
            <Text size="xsmall" color="weak">
              {author}
            </Text>
          </Box>
          <Paragraph>{description}</Paragraph>
        </Box>
      </Box>
    </Box>
  </Link>
);
