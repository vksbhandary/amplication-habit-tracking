import { ActionUpdateManyWithoutTodosInput } from "./ActionUpdateManyWithoutTodosInput";
import { GoalWhereUniqueInput } from "../goal/GoalWhereUniqueInput";

export type TodoUpdateInput = {
  actions?: ActionUpdateManyWithoutTodosInput;
  allotedTime?: number | null;
  description?: string | null;
  end?: Date | null;
  goal?: GoalWhereUniqueInput | null;
  repeateBasis?:
    | "Daily"
    | "Weekly"
    | "BiWeekly"
    | "Monthly"
    | "BiMonthly"
    | "FirstWeekdayOfMonth"
    | "LastWeekdayOfMonth"
    | null;
  repeated?: boolean | null;
  start?: Date | null;
  status?: "Completed" | "InPogress" | "Backlog" | null;
  title?: string | null;
};
