import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Carousel,
  Page,
  PageContent,
  PageMain,
  PageAside,
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
    <Page kind="wide" layout="header-main-aside">
      <PageContent align="start">
        <DetailPageHeader page={page} />
        <PageMain>
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
                    <img src="/overview-2.png" alt={`${page.title} preview`} />
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
        </PageMain>
        <PageAside>
          <Details page={page} />
        </PageAside>
      </PageContent>
    </Page>
  );
};

export default Detail;
