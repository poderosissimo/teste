import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ReviewTitle } from "../review/ReviewTitle";
import { ServiceBookingTitle } from "../serviceBooking/ServiceBookingTitle";
import { SupportTicketTitle } from "../supportTicket/SupportTicketTitle";

export const ProviderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <div />
        <NumberInput label="rating" source="rating" />
        <ReferenceArrayInput
          source="reviews"
          reference="Review"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReviewTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="serviceBookings"
          reference="ServiceBooking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ServiceBookingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="supportTickets"
          reference="SupportTicket"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SupportTicketTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
