import { TodoWhereUniqueInput } from "../todo/TodoWhereUniqueInput";

export type ActionCreateInput = {
  end?: Date | null;
  start?: Date | null;
  status?: "Completed" | "Skipped" | null;
  todo?: TodoWhereUniqueInput | null;
};
