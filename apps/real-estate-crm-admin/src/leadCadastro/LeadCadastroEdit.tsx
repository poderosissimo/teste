import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const LeadCadastroEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Contato" source="contato" />
        <DateTimeInput label="DataCriacao" source="dataCriacao" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Empresa" source="empresa" />
        <TextInput label="FonteDoLead" source="fonteDoLead" />
        <TextInput label="Nome" source="nome" />
        <TextInput label="Responsavel" source="responsavel" />
        <SelectInput
          source="statusDoLead"
          label="StatusDoLead"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="UltimaAtualizacao" source="ultimaAtualizacao" />
      </SimpleForm>
    </Edit>
  );
};
