import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ClienteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ContatoPrincipal" source="contatoPrincipal" />
        <DateTimeInput label="DataCriacao" source="dataCriacao" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Endereco" source="endereco" />
        <TextInput label="NomeEmpresa" source="nomeEmpresa" />
        <TextInput label="Observacoes" multiline source="observacoes" />
        <TextInput label="Setor" source="setor" />
        <TextInput label="TamanhoEmpresa" source="tamanhoEmpresa" />
        <TextInput label="Telefone" source="telefone" />
        <DateTimeInput label="UltimaAtualizacao" source="ultimaAtualizacao" />
      </SimpleForm>
    </Create>
  );
};
