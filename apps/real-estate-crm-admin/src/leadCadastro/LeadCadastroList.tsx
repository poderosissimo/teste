import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LeadCadastroList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LeadCadastros"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
