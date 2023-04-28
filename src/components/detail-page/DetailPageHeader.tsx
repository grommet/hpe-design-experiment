import { Box, Button, Icon, PageHeader } from "grommet-exp";
import share from "grommet-icons/img/share-rounded.svg";

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
        pad="none"
        // icon={
        //   <Box width="xsmall">
        //     <img src={page.src} alt={`${page.title} logo`} />
        //   </Box>
        // }
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
