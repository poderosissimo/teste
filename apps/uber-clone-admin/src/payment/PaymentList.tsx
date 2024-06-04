import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { RIDE_TITLE_FIELD } from "../ride/RideTitle";

export const PaymentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Payments"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
