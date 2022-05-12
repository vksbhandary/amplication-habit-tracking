import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TodoWhereUniqueInput } from "../todo/TodoWhereUniqueInput";

export type ActionWhereInput = {
  end?: DateTimeNullableFilter;
  id?: StringFilter;
  start?: DateTimeNullableFilter;
  status?: "Completed" | "Skipped";
  todo?: TodoWhereUniqueInput;
};
