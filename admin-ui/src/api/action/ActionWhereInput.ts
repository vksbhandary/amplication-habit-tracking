import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TodoWhereUniqueInput } from "../todo/TodoWhereUniqueInput";

export type ActionWhereInput = {
  end?: DateTimeNullableFilter;
  id?: StringFilter;
  minutes?: IntNullableFilter;
  start?: DateTimeNullableFilter;
  status?: "Completed" | "Skipped";
  todo?: TodoWhereUniqueInput;
  xp?: IntNullableFilter;
};
