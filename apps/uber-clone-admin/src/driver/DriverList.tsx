import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DriverList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Drivers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="LicenseNumber" source="licenseNumber" />
        <TextField label="Name" source="name" />
        <TextField label="PhoneNumber" source="phoneNumber" />
        <TextField label="Rating" source="rating" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VehicleType" source="vehicleType" />
      </Datagrid>
    </List>
  );
};
