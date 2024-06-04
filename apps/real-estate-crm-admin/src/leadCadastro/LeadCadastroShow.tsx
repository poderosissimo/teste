import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const LeadCadastroShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Contato" source="contato" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="DataCriacao" source="dataCriacao" />
        <TextField label="Email" source="email" />
        <TextField label="Empresa" source="empresa" />
        <TextField label="FonteDoLead" source="fonteDoLead" />
        <TextField label="ID" source="id" />
        <TextField label="Nome" source="nome" />
        <TextField label="Responsavel" source="responsavel" />
        <TextField label="StatusDoLead" source="statusDoLead" />
        <TextField label="UltimaAtualizacao" source="ultimaAtualizacao" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
