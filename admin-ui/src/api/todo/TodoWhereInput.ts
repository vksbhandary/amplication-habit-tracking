import { ActionListRelationFilter } from "../action/ActionListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { GoalWhereUniqueInput } from "../goal/GoalWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type TodoWhereInput = {
  actions?: ActionListRelationFilter;
  allotedTime?: IntNullableFilter;
  description?: StringNullableFilter;
  end?: DateTimeNullableFilter;
  goal?: GoalWhereUniqueInput;
  id?: StringFilter;
  repeatBasis?:
    | "Daily"
    | "Weekly"
    | "BiWeekly"
    | "Monthly"
    | "BiMonthly"
    | "FirstWeekdayOfMonth"
    | "LastWeekdayOfMonth";
  repeated?: BooleanNullableFilter;
  start?: DateTimeNullableFilter;
  status?: "Completed" | "InProgress" | "Backlog";
  title?: StringNullableFilter;
};
