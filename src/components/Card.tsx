import { Box, Heading, Icon, Paragraph, Text } from "grommet-exp";
import { nameToSlug } from "../utils";
import { Link } from "react-router-dom";
import linkNext from "grommet-icons/img/link-next.svg";

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
    <Box
      align="start"
      background="contrast"
      round="xlarge"
      pad="medium"
      gap="medium"
    >
      <Box align="start" gap="small">
        <Box flex={false}>
          <img src={src} alt={`${title} logo`} />
        </Box>
        <Box>
          <Heading level={level}>{title}</Heading>
          <Text size="xsmall" color="weak">
            {author}
          </Text>
        </Box>
        <Paragraph>{description}</Paragraph>
      </Box>
      <Icon src={linkNext} />
    </Box>
  </Link>
);
