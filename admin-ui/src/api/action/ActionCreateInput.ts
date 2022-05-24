import { TodoWhereUniqueInput } from "../todo/TodoWhereUniqueInput";

export type ActionCreateInput = {
  end?: Date | null;
  minutes?: number | null;
  start?: Date | null;
  status?: "Completed" | "Skipped" | null;
  todo?: TodoWhereUniqueInput | null;
  xp?: number | null;
};
