import { TodoCreateNestedManyWithoutGoalsInput } from "./TodoCreateNestedManyWithoutGoalsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GoalCreateInput = {
  description?: string | null;
  title: string;
  todos?: TodoCreateNestedManyWithoutGoalsInput;
  user?: UserWhereUniqueInput | null;
};
