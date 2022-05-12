import { GoalUpdateManyWithoutUsersInput } from "./GoalUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  goals?: GoalUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
