import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { GOAL_TITLE_FIELD } from "./GoalTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const GoalShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField reference="Todo" target="GoalId" label="Todos">
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
