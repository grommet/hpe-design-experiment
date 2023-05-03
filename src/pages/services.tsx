import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Anchor,
  Box,
  Button,
  DataTable,
  Grid,
  FormField,
  Heading,
  Icon,
  Page,
  PageContent,
  PageHeader,
  Select,
} from "grommet-exp";
import { Card, ContentContainer, LeftNav } from "../components";
import apps from "grommet-icons/img/apps.svg";
import list from "grommet-icons/img/list.svg";
import previous from "grommet-icons/img/previous.svg";
import data from "../data.json";
import { nameToSlug } from "../utils";
import { container, mainGrid } from "../styles.css";

const categories = ["AI/ML", "Analytics", "Big Data"];

const Services = () => {
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
    <Page kind="wide">
      <PageContent className={container} gap="medium">
        <PageHeader
          title="Services"
          parent={
            <Link
              to="/"
              style={{ textDecoration: "inherit", color: "inherit" }}
            >
              <Anchor
                href="/"
                label="Dashboard"
                icon={<Icon src={previous} />}
              />
            </Link>
          }
        />
        <Grid className={mainGrid} align="start" gap="medium">
          <LeftNav />
          <MainContent />
        </Grid>
      </PageContent>
    </Page>
  );
};

const MainContent = () => {
  const [cardView, setCardView] = useState(false);

  return (
    <ContentContainer>
      <Box direction="row" gap="small" align="end">
        <Box width="medium">
          <FormField label="Region">
            <Select value="All regions" options={["All regions", "EMEAS"]} />
          </FormField>
        </Box>
        <Button
          icon={<Icon src={cardView ? list : apps} />}
          onClick={() => setCardView(!cardView)}
        />
      </Box>
      {cardView ? (
        categories.map((category, index) => (
          <Box key={index} gap="medium">
            <Heading level={3}>{category}</Heading>
            <Grid columns="medium" gap="large">
              {data
                .filter((datum) => datum?.category === category)
                .map((datum, index) => (
                  // TO DO change to level 4
                  <Card key={index} data={datum} level={3} />
                ))}
            </Grid>
          </Box>
        ))
      ) : (
        <DataTable
          columns={[
            {
              property: "title",
              header: "Name",
              render: (datum) => (
                <Link
                  to={`/${nameToSlug(datum.title)}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Box direction="row" gap="small" align="center">
                    <img src={datum.src} />
                    {datum.title}
                  </Box>
                </Link>
              ),
            },
            { property: "author", header: "Publisher" },
            {
              property: "category",
              header: "Category",
              render: (datum) => datum.category || "--",
            },
            {
              header: "Action",
              render: () => <Button label="Launch" kind="secondary" />,
            },
          ]}
          data={data}
        />
      )}
    </ContentContainer>
  );
};

export default Services;
