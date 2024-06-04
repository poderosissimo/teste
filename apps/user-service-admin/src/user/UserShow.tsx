import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="active" source="active" />
        <TextField label="address" source="address" />
        <TextField label="addresses" source="addresses" />
        <TextField label="appointmentsTotal" source="appointmentsTotal" />
        <TextField label="cardId" source="cardId" />
        <BooleanField label="cash" source="cash" />
        <BooleanField label="cheque" source="cheque" />
        <TextField label="city" source="city" />
        <TextField label="clientId" source="clientId" />
        <TextField label="cnpj" source="cnpj" />
        <TextField label="complement" source="complement" />
        <BooleanField label="confirmedEmail" source="confirmedEmail" />
        <TextField label="coord" source="coord" />
        <TextField label="cpf" source="cpf" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="createdById" source="createdById" />
        <BooleanField label="creditcard" source="creditcard" />
        <BooleanField label="debitcard" source="debitcard" />
        <TextField label="distance" source="distance" />
        <TextField label="email" source="email" />
        <TextField label="globalID" source="globalId" />
        <TextField label="ID" source="id" />
        <TextField label="myOwnerId" source="myOwnerId" />
        <TextField label="name" source="name" />
        <TextField label="nextPlan" source="nextPlan" />
        <TextField label="ownerId" source="ownerId" />
        <TextField label="password" source="password" />
        <TextField label="payDay" source="payDay" />
        <TextField label="phone" source="phone" />
        <TextField label="photoId" source="photoId" />
        <TextField label="photoUrl" source="photoUrl" />
        <BooleanField label="pix" source="pix" />
        <TextField label="plan" source="plan" />
        <TextField label="role" source="role" />
        <BooleanField label="sendedEmail" source="sendedEmail" />
        <TextField label="serviceIds" source="serviceIds" />
        <TextField label="serviceOptions" source="serviceOptions" />
        <BooleanField label="transferbank" source="transferbank" />
        <TextField label="uf" source="uf" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
