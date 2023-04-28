import { Box, Button, Nav, Text } from "grommet-exp";
import { ContentContainer } from "../ContentContainer";

export const LeftNav = () => {
  return (
    <ContentContainer>
      <Text weight="medium" color="strong" size="large">
        Discover and manage services
      </Text>
      <Nav>
        <Box gap="small">
          <Button label="My services" />
          <Button label="Subscriptions" />
          <Button label="Catalog" />
          <Button label="Marketplace" active />
        </Box>
      </Nav>
    </ContentContainer>
  );
};
