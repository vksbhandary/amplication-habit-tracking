import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { TODO_TITLE_FIELD } from "../todo/TodoTitle";

export const ActionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="end" source="end" />
        <TextField label="ID" source="id" />
        <TextField label="start" source="start" />
        <TextField label="status" source="status" />
        <ReferenceField label="todo" source="todo.id" reference="Todo">
          <TextField source={TODO_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
