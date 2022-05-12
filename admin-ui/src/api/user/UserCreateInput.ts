import { GoalCreateNestedManyWithoutUsersInput } from "./GoalCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  goals?: GoalCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
