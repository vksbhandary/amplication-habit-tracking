/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { GoalWhereUniqueInput } from "../../goal/base/GoalWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class GoalUpdateManyWithoutUsersInput {
  @Field(() => [GoalWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [GoalWhereUniqueInput],
  })
  connect?: Array<GoalWhereUniqueInput>;

  @Field(() => [GoalWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [GoalWhereUniqueInput],
  })
  disconnect?: Array<GoalWhereUniqueInput>;

  @Field(() => [GoalWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [GoalWhereUniqueInput],
  })
  set?: Array<GoalWhereUniqueInput>;
}
export { GoalUpdateManyWithoutUsersInput };
