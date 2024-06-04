import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FollowingTitle } from "./FollowingTitle";

export const FollowingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="follower" source="follower" />
        <ReferenceInput
          source="following.id"
          reference="Following"
          label="following"
        >
          <SelectInput optionText={FollowingTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="followings"
          reference="Following"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FollowingTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
