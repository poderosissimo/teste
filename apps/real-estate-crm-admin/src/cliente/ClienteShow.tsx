import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ClienteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
