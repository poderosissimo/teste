import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DRIVER_TITLE_FIELD } from "./DriverTitle";
import { RIDER_TITLE_FIELD } from "../rider/RiderTitle";

export const DriverShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="LicenseNumber" source="licenseNumber" />
        <TextField label="Name" source="name" />
        <TextField label="PhoneNumber" source="phoneNumber" />
        <TextField label="Rating" source="rating" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VehicleType" source="vehicleType" />
        <ReferenceManyField reference="Ride" target="driverId" label="Rides">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Driver"
              source="driver.id"
              reference="Driver"
            >
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
