import {
  Box,
  Button,
  Grid,
  Heading,
  Icon,
  Nav,
  Page,
  PageContent,
  Paragraph,
  Text,
} from "grommet-exp";
import domain from "grommet-icons/img/domain.svg";
import cloudDownload from "grommet-icons/img/cloud-download.svg";
import database from "grommet-icons/img/database.svg";
import { ContentContainer } from "../components";

const actions = [
  "Add devices",
  "Add subscriptions",
  "Add users",
  "Assign roles",
  "Create location",
];

const workflows = [
  {
    title: "Build a web app",
    description: `Cloud networking for campus, branch, remote, data center, and
  IoT networks.`,
    icon: domain,
  },
  {
    title: "Import an app",
    description: `Import an existing application onto the GreenLake Cloud Platform.`,
    icon: cloudDownload,
  },
  {
    title: "Create a database",
    description: `Monitor, manage and optimize consumption-based IT services, on-premises and in the cloud.`,
    icon: database,
  },
];

const Index = () => {
  return (
    <Page kind="full">
      <PageContent>
        <Grid columns="medium-flex" gap="large" pad={{ vertical: "large" }}>
          <Box gap="medium">
            <ContentContainer>
              <Heading level={2}>Quick actions</Heading>
              <Nav gap="small">
                {actions.map((action, index) => (
                  <Button key={index} label={action} />
                ))}
              </Nav>
            </ContentContainer>
            <ContentContainer>
              <Heading level={2}>Workflows</Heading>
              {workflows.map((workflow) => (
                <Box align="start" gap="xsmall">
                  <Icon src={workflow.icon} size="xlarge" />
                  <Text>{workflow.title}</Text>
                  <Paragraph size="small" color="weak">
                    {workflow.description}
                  </Paragraph>
                </Box>
              ))}
            </ContentContainer>
          </Box>
          <MainContent />
        </Grid>
      </PageContent>
    </Page>
  );
};

const MainContent = () => (
  <Box gap="medium">
    <Grid columns={2} gap="medium">
      <ContentContainer align="start">
        <Heading level={2}>Recommendations</Heading>
        <Box>
          <Text size="xlarge">126 Wellness recommendations</Text>
          <Paragraph size="small">
            Recommendations are based on your current environment and best
            practices.
          </Paragraph>
        </Box>
        <Button label="View all recommendations" kind="secondary" />
      </ContentContainer>
      <ContentContainer align="start">
        <Heading level={2}>Cases</Heading>
        <Box>Meter goes here</Box>
        <Button label="View all cases" kind="secondary" />
      </ContentContainer>
    </Grid>
    <Grid columns="flex-medium" gap="medium">
      <ContentContainer align="start">
        <Heading level={2}>Locations</Heading>
        <Box>map goes here</Box>
      </ContentContainer>
      <ContentContainer align="start">
        <Heading level={2}>Cost and usage</Heading>
        <Box>Meter goes here</Box>
        <Button label="View consumption" kind="secondary" />
      </ContentContainer>
    </Grid>
  </Box>
);

export default Index;
