import { TodoUpdateManyWithoutGoalsInput } from "./TodoUpdateManyWithoutGoalsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GoalUpdateInput = {
  description?: string | null;
  title?: string;
  todos?: TodoUpdateManyWithoutGoalsInput;
  user?: UserWhereUniqueInput | null;
};
