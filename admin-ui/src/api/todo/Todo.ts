import { Action } from "../action/Action";
import { Goal } from "../goal/Goal";

export type Todo = {
  actions?: Array<Action>;
  allotedTime: number | null;
  createdAt: Date;
  description: string | null;
  end: Date | null;
  goal?: Goal | null;
  id: string;
  repeatBasis?:
    | "Daily"
    | "Weekly"
    | "BiWeekly"
    | "Monthly"
    | "BiMonthly"
    | "FirstWeekdayOfMonth"
    | "LastWeekdayOfMonth"
    | null;
  repeated: boolean | null;
  repetitions: number | null;
  start: Date | null;
  status?: "Completed" | "InProgress" | "Backlog" | null;
  title: string | null;
  updatedAt: Date;
};
