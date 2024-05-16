import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  DateField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const OrderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Orders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField
          label="comissionPaidByOwnerField"
          source="comissionPaidByOwnerField"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="orderAppointmentDate" source="orderAppointmentDate" />
        <TextField label="orderClientId" source="orderClientId" />
        <TextField label="orderComissionValue" source="orderComissionValue" />
        <TextField label="orderCreatedAt" source="orderCreatedAt" />
        <TextField label="orderExtraCost" source="orderExtraCost" />
        <BooleanField label="orderHaveFidelity" source="orderHaveFidelity" />
        <TextField label="orderNormalCost" source="orderNormalCost" />
        <TextField label="orderOwnerId" source="orderOwnerId" />
        <BooleanField
          label="orderPaidByClientField"
          source="orderPaidByClientField"
        />
        <TextField label="orderPaymentForm" source="orderPaymentForm" />
        <TextField
          label="orderPercentageAdopted"
          source="orderPercentageAdopted"
        />
        <TextField label="orderPointsUsed" source="orderPointsUsed" />
        <TextField label="orderProfessionalId" source="orderProfessionalId" />
        <TextField label="orderRequestId" source="orderRequestId" />
        <TextField label="orderTotalValue" source="orderTotalValue" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
