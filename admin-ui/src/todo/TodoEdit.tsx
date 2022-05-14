import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { ActionTitle } from "../action/ActionTitle";
import { GoalTitle } from "../goal/GoalTitle";

export const TodoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="actions"
          reference="Action"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ActionTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="allotedTime" source="allotedTime" />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="end" source="end" />
        <ReferenceInput source="goal.id" reference="Goal" label="goal">
          <SelectInput optionText={GoalTitle} />
        </ReferenceInput>
        <SelectInput
          source="repeatBasis"
          label="repeatBasis"
          choices={[
            { label: "Daily", value: "Daily" },
            { label: "Weekly", value: "Weekly" },
            { label: "Bi weekly", value: "BiWeekly" },
            { label: "Monthly", value: "Monthly" },
            { label: "Bi monthly", value: "BiMonthly" },
            { label: "First weekday of month", value: "FirstWeekdayOfMonth" },
            { label: "Last weekday of month", value: "LastWeekdayOfMonth" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput label="repeated" source="repeated" />
        <DateTimeInput label="start" source="start" />
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "Completed", value: "Completed" },
            { label: "In progress", value: "InProgress" },
            { label: "Backlog", value: "Backlog" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
