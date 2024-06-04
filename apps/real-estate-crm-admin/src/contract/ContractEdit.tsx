import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const ContractEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
