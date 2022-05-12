import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TODO_TITLE_FIELD } from "../todo/TodoTitle";

export const ActionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"actions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="end" source="end" />
        <TextField label="ID" source="id" />
        <TextField label="start" source="start" />
        <TextField label="status" source="status" />
        <ReferenceField label="todo" source="todo.id" reference="Todo">
          <TextField source={TODO_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
