import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GoalListRelationFilter } from "../goal/GoalListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  goals?: GoalListRelationFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
