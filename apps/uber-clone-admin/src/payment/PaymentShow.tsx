import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { RIDE_TITLE_FIELD } from "../ride/RideTitle";

export const PaymentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="PaymentMethod" source="paymentMethod" />
        <TextField label="PaymentStatus" source="paymentStatus" />
        <ReferenceField label="Ride" source="ride.id" reference="Ride">
          <TextField source={RIDE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="TransactionId" source="transactionId" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
