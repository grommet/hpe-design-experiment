import { useParams } from "react-router-dom";
import { Box, Page, PageContent, Paragraph } from "grommet-exp";
import { Grid, Markdown, Tabs, Tab } from "grommet";
import { DetailPageHeader, Details } from "../components";
import data from "../data.json";
import { nameToSlug } from "../utils";

const Detail = () => {
  const { id } = useParams();
  const [page] = Object.values(data).filter(
    (value) => nameToSlug(value.title) === id
  );

  return (
    <Page kind="full">
      <PageContent>
        <Grid
          columns={["auto", "flex", "medium"]}
          gap="xlarge"
          pad={{ vertical: "large" }}
        >
          <DetailPageHeader page={page} />
          <Box>
            <Tabs>
              {page.overview && (
                <Tab title="Overview">
                  <Box gap="large">
                    <Markdown
                      components={{
                        p: <Paragraph size="large" />,
                      }}
                    >
                      {page.overview}
                    </Markdown>
                    <Box width="75%">
                      <img
                        src="/overview-1.png"
                        alt={`${page.title} preview`}
                      />
                    </Box>
                  </Box>
                </Tab>
              )}
              <Tab title="Regions">
                <Box pad={{ vertical: "medium" }}>Tbd</Box>
              </Tab>
              <Tab title="Related services">
                <Box pad={{ vertical: "medium" }}>Tbd</Box>
              </Tab>
            </Tabs>
          </Box>
          <Details page={page} />
        </Grid>
      </PageContent>
    </Page>
  );
};

export default Detail;
