import {
  Button,
  Form,
  FormField,
  Page,
  PageContent,
  PageHeader,
  TextInput,
} from "grommet";
export const Login = ({
  setAuthenticated,
}: {
  setAuthenticated: (arg: boolean) => void;
}) => {
  return (
    <Page>
      <PageContent>
        <PageHeader
          title="HPE Design Experiment"
          subtitle="Please log in to view the designs."
        />
        <Form
          onSubmit={({ value }: { value: { password: string } }) => {
            if (value.password === import.meta.env.VITE_PASSWORD) {
              localStorage.setItem("hpe-design-experiment", "true");
              setAuthenticated(true);
            }
          }}
        >
          <FormField
            label="Password"
            name="password"
            contentProps={{ width: "medium" }}
            htmlFor="password"
          >
            <TextInput type="password" name="password" id="password" />
          </FormField>
          <Button label="Submit" type="submit" primary />
        </Form>
      </PageContent>
    </Page>
  );
};
