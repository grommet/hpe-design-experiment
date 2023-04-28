import { useParams } from "react-router-dom";
import {
  Box,
  Carousel,
  Page,
  PageContent,
  Paragraph,
  Tab,
  Tabs,
} from "grommet-exp";
import { Markdown } from "grommet";
import { DetailPageHeader, Details } from "../components";
import data from "../data.json";
import { nameToSlug } from "../utils";

const Detail = () => {
  const { id } = useParams();
  const [page] = Object.values(data).filter(
    (value) => nameToSlug(value.title) === id
  );

  return (
    <Page kind="wide">
      <Box pad={{ vertical: "large" }}>
        <PageContent>
          <DetailPageHeader page={page} />
          <Box background="front" pad="medium" round="xlarge">
            <Tabs>
              <Tab label="Overview">
                <Box gap="large">
                  <Markdown
                    components={{
                      p: <Paragraph size="large" />,
                    }}
                  >
                    {page.overview}
                  </Markdown>
                  <Carousel>
                    <img src="/overview-1.png" alt={`${page.title} preview`} />
                    <img src="/overview-1.png" alt={`${page.title} preview`} />
                  </Carousel>
                </Box>
              </Tab>
              <Tab label="Regions">
                <Box pad={{ vertical: "medium" }}>Tbd</Box>
              </Tab>
              <Tab label="Related services">
                <Box pad={{ vertical: "medium" }}>Tbd</Box>
              </Tab>
            </Tabs>
          </Box>
          <Details page={page} />
        </PageContent>
      </Box>
    </Page>
  );
};

export default Detail;
