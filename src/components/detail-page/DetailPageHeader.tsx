import { Link } from "react-router-dom";
import { Anchor, Box, Button, Icon, PageHeader } from "grommet-exp";
import share from "grommet-icons/img/share-rounded.svg";
import previous from "grommet-icons/img/previous.svg";

type PageType = {
  author?: string;
  title?: string;
  description?: string;
  src?: string;
};

export const DetailPageHeader = ({ page }: { page: PageType }) => {
  return (
    <Box background="front" round="xlarge" pad="medium">
      <PageHeader
        // icon={
        //   <Box width="xsmall">
        //     <img src={page.src} alt={`${page.title} logo`} />
        //   </Box>
        // }
        // TO DO can't have nested link
        parent={
          <Link
            to="/services"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Anchor label="Services" href="" icon={<Icon src={previous} />} />
          </Link>
        }
        title={page.title}
        subtitle={page.author}
        actions={
          <Box direction="row-responsive" gap="small" align="start">
            <Button
              label="Test drive"
              icon={<Icon src={share} />}
              kind="primary"
              reverse
            />
            <Button label="Contact sales" kind="secondary" />
          </Box>
        }
      />
    </Box>
  );
};
