import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FollowCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="followedId" source="followedId" />
        <TextInput label="followerId" source="followerId" />
      </SimpleForm>
    </Create>
  );
};
