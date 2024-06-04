import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ClienteList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Clientes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ContatoPrincipal" source="contatoPrincipal" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="DataCriacao" source="dataCriacao" />
        <TextField label="Email" source="email" />
        <TextField label="Endereco" source="endereco" />
        <TextField label="ID" source="id" />
        <TextField label="NomeEmpresa" source="nomeEmpresa" />
        <TextField label="Observacoes" source="observacoes" />
        <TextField label="Setor" source="setor" />
        <TextField label="TamanhoEmpresa" source="tamanhoEmpresa" />
        <TextField label="Telefone" source="telefone" />
        <TextField label="UltimaAtualizacao" source="ultimaAtualizacao" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
