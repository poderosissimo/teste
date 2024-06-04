import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RideTitle } from "../ride/RideTitle";

export const RiderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Name" source="name" />
        <TextInput label="PaymentMethod" source="paymentMethod" />
        <TextInput label="PhoneNumber" source="phoneNumber" />
        <NumberInput label="Rating" source="rating" />
        <ReferenceArrayInput
          source="rides"
          reference="Ride"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RideTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
