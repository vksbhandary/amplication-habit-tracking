import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { TodoTitle } from "../todo/TodoTitle";

export const ActionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="end" source="end" />
        <DateTimeInput label="start" source="start" />
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "Completed", value: "Completed" },
            { label: "Skipped", value: "Skipped" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="todo.id" reference="Todo" label="todo">
          <SelectInput optionText={TodoTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
