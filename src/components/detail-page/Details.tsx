import { Anchor, Box, Heading, NameValueList, NameValuePair } from "grommet";

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
      <Heading level={2} margin="none">
        Details
      </Heading>
      <NameValueList pairProps={{ direction: "column" }}>
        {Object.entries(page.details).map(([key, value]) => {
          let renderValue;
          if (Array.isArray(value))
            renderValue = value.map(
              (d, index) => `${d}${index < value.length - 1 ? ", " : ""}`
            );
          else if (key === "documentation" || key === "termsOfService")
            renderValue = (
              <Anchor alignSelf="start" label={value} href={value} />
            );
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
