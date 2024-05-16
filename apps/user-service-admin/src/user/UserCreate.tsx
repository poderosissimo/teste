import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="active" source="active" />
        <TextInput label="address" multiline source="address" />
        <div />
        <NumberInput
          step={1}
          label="appointmentsTotal"
          source="appointmentsTotal"
        />
        <TextInput label="cardId" source="cardId" />
        <BooleanInput label="cash" source="cash" />
        <BooleanInput label="cheque" source="cheque" />
        <TextInput label="city" source="city" />
        <TextInput label="clientId" source="clientId" />
        <TextInput label="cnpj" source="cnpj" />
        <TextInput label="complement" multiline source="complement" />
        <BooleanInput label="confirmedEmail" source="confirmedEmail" />
        <div />
        <TextInput label="cpf" source="cpf" />
        <TextInput label="createdById" source="createdById" />
        <BooleanInput label="creditcard" source="creditcard" />
        <BooleanInput label="debitcard" source="debitcard" />
        <NumberInput label="distance" source="distance" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="globalID" source="globalId" />
        <TextInput label="myOwnerId" source="myOwnerId" />
        <TextInput label="name" source="name" />
        <TextInput label="nextPlan" source="nextPlan" />
        <TextInput label="ownerId" source="ownerId" />
        <TextInput label="password" source="password" />
        <TextInput label="payDay" source="payDay" />
        <TextInput label="phone" source="phone" />
        <TextInput label="photoId" source="photoId" />
        <TextInput label="photoUrl" source="photoUrl" />
        <BooleanInput label="pix" source="pix" />
        <TextInput label="plan" source="plan" />
        <TextInput label="role" source="role" />
        <BooleanInput label="sendedEmail" source="sendedEmail" />
        <TextInput label="serviceIds" multiline source="serviceIds" />
        <div />
        <BooleanInput label="transferbank" source="transferbank" />
        <TextInput label="uf" source="uf" />
      </SimpleForm>
    </Create>
  );
};
