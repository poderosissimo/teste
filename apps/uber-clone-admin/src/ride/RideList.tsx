import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DRIVER_TITLE_FIELD } from "../driver/DriverTitle";
import { RIDER_TITLE_FIELD } from "../rider/RiderTitle";

export const RideList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Rides"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
