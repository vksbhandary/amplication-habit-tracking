import { ActionCreateNestedManyWithoutTodosInput } from "./ActionCreateNestedManyWithoutTodosInput";
import { GoalWhereUniqueInput } from "../goal/GoalWhereUniqueInput";

export type TodoCreateInput = {
  actions?: ActionCreateNestedManyWithoutTodosInput;
  allotedTime?: number | null;
  description?: string | null;
  end?: Date | null;
  goal?: GoalWhereUniqueInput | null;
  repeatBasis?:
    | "Daily"
    | "Weekly"
    | "BiWeekly"
    | "Monthly"
    | "BiMonthly"
    | "FirstWeekdayOfMonth"
    | "LastWeekdayOfMonth"
    | null;
  repeated?: boolean | null;
  repetitions?: number | null;
  start?: Date | null;
  status?: "Completed" | "InProgress" | "Backlog" | null;
  title?: string | null;
};
