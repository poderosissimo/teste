import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ChatEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="message" multiline source="message" />
        <TextInput label="receiver" source="receiver" />
        <TextInput label="sender" source="sender" />
      </SimpleForm>
    </Edit>
  );
};
