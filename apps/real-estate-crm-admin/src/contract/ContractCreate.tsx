import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const ContractCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="ApprovalRequired" source="approvalRequired" />
        <TextInput label="ApprovedBy" source="approvedBy" />
        <DateTimeInput label="RenewalAlertDate" source="renewalAlertDate" />
        <SelectInput
          source="validationStatus"
          label="ValidationStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
