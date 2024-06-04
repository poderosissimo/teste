import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { RideTitle } from "../ride/RideTitle";

export const PaymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <TextInput label="PaymentMethod" source="paymentMethod" />
        <SelectInput
          source="paymentStatus"
          label="PaymentStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="ride.id" reference="Ride" label="Ride">
          <SelectInput optionText={RideTitle} />
        </ReferenceInput>
        <TextInput label="TransactionId" source="transactionId" />
      </SimpleForm>
    </Create>
  );
};
