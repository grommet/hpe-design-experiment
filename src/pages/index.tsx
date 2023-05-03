import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Anchor,
  Box,
  Button,
  Grid,
  Heading,
  Icon,
  Legend,
  Meter,
  Nav,
  Page,
  PageContent,
  PageHeader,
  Paragraph,
  Text,
} from "grommet-exp";
import domain from "grommet-icons/img/domain.svg";
import cloudDownload from "grommet-icons/img/cloud-download.svg";
import database from "grommet-icons/img/database.svg";
import { ContentContainer } from "../components";
import {
  lowerGrid,
  container,
  mainGrid,
  rightGridContainer,
  upperGrid,
} from "../styles.css";

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
  const navigate = useNavigate();
  useEffect(() => {
    const changeRoute = () => {
      navigate(window.location.pathname);
    };

    window.addEventListener("routeChange", changeRoute);
    changeRoute();
    return () => window.removeEventListener("routeChange", changeRoute);
  }, []);

  return (
    <Page kind="full">
      <PageContent className={container} gap="medium">
        <PageHeader
          // icon={<Box>hi</Box>}
          title="Dashboard"
          actions={
            <Box direction="row-responsive" gap="small">
              <Button label="Customize" kind="secondary" />
              <Button label="Add widget" kind="primary" />
            </Box>
          }
        />
        <Grid gap="medium" pad={{ bottom: "large" }} className={mainGrid}>
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
              {workflows.map((workflow, index) => (
                <Box align="start" gap="xsmall" key={index}>
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

const MainContent = () => {
  return (
    <Box gap="medium" className={rightGridContainer}>
      <Grid gap="medium" className={upperGrid}>
        <ContentContainer align="start">
          <Heading level={2}>Recommendations</Heading>
          <Box gap="small">
            <Text size="xlarge">126 Wellness recommendations</Text>
            <Paragraph size="small">
              Recommendations are based on your current environment and best
              practices.
            </Paragraph>
            <Meter
              thickness="small"
              round
              kind="qualitative"
              values={[
                { label: "High severity", value: 60 },
                { label: "Medium severity", value: 35 },
                { label: "Low severity", value: 5 },
              ]}
            />
            <Legend
              values={[
                { label: "High severity", value: 60 },
                { label: "Medium severity", value: 35 },
                { label: "Low severity", value: 5 },
              ]}
            />
          </Box>
          <Button label="View all recommendations" kind="secondary" />
        </ContentContainer>
        <ContentContainer align="start">
          <Heading level={2}>Open cases</Heading>
          <Meter
            type="circle"
            size="small"
            kind="qualitative"
            values={[
              { label: "Awaiting response", value: 5 },
              { label: "Response sent", value: 6 },
            ]}
            legend
          />
          <Button label="View all cases" kind="secondary" />
        </ContentContainer>
      </Grid>
      <Grid gap="medium" className={lowerGrid}>
        <ContentContainer align="start">
          <Heading level={2}>Locations</Heading>
          <Box>map goes here</Box>
        </ContentContainer>
        <ContentContainer align="start">
          <Heading level={2}>Cost and usage</Heading>
          <Meter
            type="pie"
            size="small"
            kind="qualitative"
            values={[
              { label: "Compute", value: 90000 },
              { label: "Storage", value: 72672 },
              { label: "Database", value: 43732 },
              { label: "Networking", value: 53600 },
              { label: "Other", value: 12000 },
            ]}
            legend
          />
          <Button label="View consumption" kind="secondary" />
        </ContentContainer>
      </Grid>
    </Box>
  );
};

export default Index;
