import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PROVIDER_TITLE_FIELD } from "./ProviderTitle";
import { SERVICEBOOKING_TITLE_FIELD } from "../serviceBooking/ServiceBookingTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ProviderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <TextField label="profilePicture" source="profilePicture" />
        <TextField label="rating" source="rating" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Review"
          target="providerId"
          label="Reviews"
        >
          <Datagrid rowClick="show">
            <TextField label="comment" source="comment" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="provider"
              source="provider.id"
              reference="Provider"
            >
              <TextField source={PROVIDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="rating" source="rating" />
            <ReferenceField
              label="serviceBooking"
              source="servicebooking.id"
              reference="ServiceBooking"
            >
              <TextField source={SERVICEBOOKING_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ServiceBooking"
          target="providerId"
          label="ServiceBookings"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="endTime" source="endTime" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="provider"
              source="provider.id"
              reference="Provider"
            >
              <TextField source={PROVIDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="requestTime" source="requestTime" />
            <TextField label="serviceType" source="serviceType" />
            <TextField label="startTime" source="startTime" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SupportTicket"
          target="providerId"
          label="SupportTickets"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="provider"
              source="provider.id"
              reference="Provider"
            >
              <TextField source={PROVIDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <TextField label="subject" source="subject" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
