import { Box, Grid, Heading, Page, PageContent } from "grommet";
import { Card, Toolbar, HeroCarousel, InPageNav, LeftNav } from "../components";
import data from "../data.json";

const categories = ["AI/ML", "Analytics", "Big Data"];

const Index = () => {
  return (
    <Page kind="full">
      <PageContent>
        <Grid
          columns={["auto", "flex", "small"]}
          gap="large"
          pad={{ vertical: "large" }}
        >
          <LeftNav />
          <MainContent />
          <InPageNav />
        </Grid>
      </PageContent>
    </Page>
  );
};

const MainContent = () => (
  <Box gap="large" pad={{ top: "xsmall" }}>
    <Toolbar />
    <HeroCarousel />
    {categories.map((category, index) => (
      <Box key={index} gap="medium">
        <Heading margin="none" level={2}>
          {category}
        </Heading>
        <Grid columns="medium" gap="large">
          {data
            .filter((datum) => datum?.category === category)
            .map((datum, index) => (
              <Card key={index} data={datum} level={3} />
            ))}
        </Grid>
      </Box>
    ))}
  </Box>
);

export default Index;
