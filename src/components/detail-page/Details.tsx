import { Anchor, Box, Heading } from "grommet-exp";
import { NameValueList, NameValuePair } from "grommet";

const details = {
  availableRegions: "Available regions",
  languages: "Languages",
  supportedWorkspaceTypes: "Supported workspace types",
  documentation: "Documentation",
  termsOfService: "Terms of service",
  published: "Published",
};

type PageType = {
  author?: string;
  title?: string;
  description?: string;
  details: object;
  src?: string;
};

export const Details = ({ page }: { page: PageType }) => {
  return (
    <Box gap="small">
      <Heading level={2}>Details</Heading>
      <NameValueList
        pairProps={{ direction: "column" }}
        valueProps={{ align: "start" }}
      >
        {Object.entries(page.details).map(([key, value]) => {
          let renderValue;
          if (Array.isArray(value))
            renderValue = value.map(
              (d, index) => `${d}${index < value.length - 1 ? ", " : ""}`
            );
          else if (key === "documentation" || key === "termsOfService")
            renderValue = <Anchor href={value}>{value}</Anchor>;
          else if (key === "published")
            renderValue = new Date(value).toLocaleDateString();
          else renderValue = value;

          return (
            // @ts-ignore
            <NameValuePair name={details[key]}>{renderValue}</NameValuePair>
          );
        })}
      </NameValueList>
    </Box>
  );
};
