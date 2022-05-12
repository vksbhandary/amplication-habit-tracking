import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TodoListRelationFilter } from "../todo/TodoListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GoalWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  title?: StringFilter;
  todos?: TodoListRelationFilter;
  user?: UserWhereUniqueInput;
};
