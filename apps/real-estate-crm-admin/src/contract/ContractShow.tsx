import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";

export const ContractShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="ApprovalRequired" source="approvalRequired" />
        <TextField label="ApprovedBy" source="approvedBy" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="RenewalAlertDate" source="renewalAlertDate" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="ValidationStatus" source="validationStatus" />
      </SimpleShowLayout>
    </Show>
  );
};
