import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { TODO_TITLE_FIELD } from "./TodoTitle";
import { GOAL_TITLE_FIELD } from "../goal/GoalTitle";

export const TodoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="allotedTime" source="allotedTime" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="end" source="end" />
        <ReferenceField label="goal" source="goal.id" reference="Goal">
          <TextField source={GOAL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="repeatBasis" source="repeatBasis" />
        <BooleanField label="repeated" source="repeated" />
        <TextField label="repetitions" source="repetitions" />
        <TextField label="start" source="start" />
        <TextField label="status" source="status" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Action" target="TodoId" label="actions">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="end" source="end" />
            <TextField label="ID" source="id" />
            <TextField label="minutes" source="minutes" />
            <TextField label="start" source="start" />
            <TextField label="status" source="status" />
            <ReferenceField label="todo" source="todo.id" reference="Todo">
              <TextField source={TODO_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="xp" source="xp" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
