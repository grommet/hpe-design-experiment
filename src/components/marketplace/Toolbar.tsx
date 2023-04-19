import { Box, FormField, Select, TextInput } from "grommet";
import { Search } from "grommet-icons";

export const Toolbar = () => {
  return (
    <Box direction="row" align="end" gap="small">
      <Box flex margin={{ bottom: "xsmall" }}>
        <TextInput icon={<Search />} placeholder="Search" reverse />
      </Box>
      <Box flex>
        <FormField label="Region">
          <Select options={["All regions"]} value="All regions" />
        </FormField>
      </Box>
      <Box flex>
        <FormField label="Industry">
          <Select options={["All industries"]} value="All industries" />
        </FormField>
      </Box>
    </Box>
  );
};
