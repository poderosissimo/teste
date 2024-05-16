import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput
          label="comissionPaidByOwnerField"
          source="comissionPaidByOwnerField"
        />
        <DateTimeInput
          label="orderAppointmentDate"
          source="orderAppointmentDate"
        />
        <TextInput label="orderClientId" source="orderClientId" />
        <NumberInput label="orderComissionValue" source="orderComissionValue" />
        <DateTimeInput label="orderCreatedAt" source="orderCreatedAt" />
        <NumberInput label="orderExtraCost" source="orderExtraCost" />
        <BooleanInput label="orderHaveFidelity" source="orderHaveFidelity" />
        <NumberInput label="orderNormalCost" source="orderNormalCost" />
        <TextInput label="orderOwnerId" source="orderOwnerId" />
        <BooleanInput
          label="orderPaidByClientField"
          source="orderPaidByClientField"
        />
        <TextInput label="orderPaymentForm" source="orderPaymentForm" />
        <NumberInput
          label="orderPercentageAdopted"
          source="orderPercentageAdopted"
        />
        <NumberInput label="orderPointsUsed" source="orderPointsUsed" />
        <TextInput label="orderProfessionalId" source="orderProfessionalId" />
        <TextInput label="orderRequestId" source="orderRequestId" />
        <NumberInput label="orderTotalValue" source="orderTotalValue" />
      </SimpleForm>
    </Create>
  );
};
