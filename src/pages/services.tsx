import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Anchor,
  Box,
  Button,
  Grid,
  FormField,
  Heading,
  Icon,
  Page,
  PageContent,
  PageHeader,
  Select,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  Text,
} from "grommet-exp";
import { Card, ContentContainer, LeftNav } from "../components";
import apps from "grommet-icons/img/apps.svg";
import list from "grommet-icons/img/list.svg";
import previous from "grommet-icons/img/previous.svg";
import data from "../data.json";
import { nameToSlug } from "../utils";

const categories = ["AI/ML", "Analytics", "Big Data"];

const Services = () => {
  return (
    <Page kind="full">
      <PageContent>
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
          actions={
            <Box direction="row-responsive" gap="small">
              <Button label="Customize" kind="secondary" />
              <Button label="Add widget" kind="primary" />
            </Box>
          }
        />
        <Grid align="start" columns="medium-flex" gap="large">
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
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Publisher</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((datum) => (
              <TableRow>
                <TableCell>
                  <Link
                    to={`/${nameToSlug(datum.title)}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Box direction="row" gap="small" align="center">
                      <img src={datum.src} />
                      {datum.title}
                    </Box>
                  </Link>
                </TableCell>
                <TableCell>{datum.author}</TableCell>
                <TableCell>{datum.category || "--"}</TableCell>
                <TableCell>
                  <Button label="Launch" kind="secondary" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </ContentContainer>
  );
};

export default Services;