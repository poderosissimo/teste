import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { RIDE_TITLE_FIELD } from "./RideTitle";
import { DRIVER_TITLE_FIELD } from "../driver/DriverTitle";
import { RIDER_TITLE_FIELD } from "../rider/RiderTitle";

export const RideShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Driver" source="driver.id" reference="Driver">
          <TextField source={DRIVER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="DropoffLocation" source="dropoffLocation" />
        <TextField label="EndTime" source="endTime" />
        <TextField label="ID" source="id" />
        <TextField label="PickupLocation" source="pickupLocation" />
        <TextField label="RequestTime" source="requestTime" />
        <ReferenceField label="Rider" source="rider.id" reference="Rider">
          <TextField source={RIDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="StartTime" source="startTime" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Payment"
          target="rideId"
          label="Payments"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
