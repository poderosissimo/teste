import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DriverTitle } from "../driver/DriverTitle";
import { PaymentTitle } from "../payment/PaymentTitle";
import { RiderTitle } from "../rider/RiderTitle";

export const RideEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="driver.id" reference="Driver" label="Driver">
          <SelectInput optionText={DriverTitle} />
        </ReferenceInput>
        <TextInput label="DropoffLocation" multiline source="dropoffLocation" />
        <DateTimeInput label="EndTime" source="endTime" />
        <ReferenceArrayInput
          source="payments"
          reference="Payment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTitle} />
        </ReferenceArrayInput>
        <TextInput label="PickupLocation" multiline source="pickupLocation" />
        <DateTimeInput label="RequestTime" source="requestTime" />
        <ReferenceInput source="rider.id" reference="Rider" label="Rider">
          <SelectInput optionText={RiderTitle} />
        </ReferenceInput>
        <DateTimeInput label="StartTime" source="startTime" />
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
