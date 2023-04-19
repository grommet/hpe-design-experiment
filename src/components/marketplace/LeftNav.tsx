import { Box, Button, Heading } from "grommet";

export const LeftNav = () => {
  return (
    <Box gap="medium">
      <Heading margin="none" level={1}>
        Services
      </Heading>
      <Box gap="small">
        <Button label="My services" />
        <Button label="Subscriptions" />
        <Button label="Marketplace" active />
      </Box>
    </Box>
  );
};
