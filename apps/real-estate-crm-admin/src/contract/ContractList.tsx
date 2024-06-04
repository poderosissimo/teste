import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ContractList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Contracts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField label="ApprovalRequired" source="approvalRequired" />
        <TextField label="ApprovedBy" source="approvedBy" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="RenewalAlertDate" source="renewalAlertDate" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="ValidationStatus" source="validationStatus" />
      </Datagrid>
    </List>
  );
};
