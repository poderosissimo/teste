import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ChatCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="message" multiline source="message" />
        <TextInput label="receiver" source="receiver" />
        <TextInput label="sender" source="sender" />
      </SimpleForm>
    </Create>
  );
};
