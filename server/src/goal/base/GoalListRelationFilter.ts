/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GoalWhereInput } from "./GoalWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GoalListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GoalWhereInput,
  })
  @ValidateNested()
  @Type(() => GoalWhereInput)
  @IsOptional()
  @Field(() => GoalWhereInput, {
    nullable: true,
  })
  every?: GoalWhereInput;

  @ApiProperty({
    required: false,
    type: () => GoalWhereInput,
  })
  @ValidateNested()
  @Type(() => GoalWhereInput)
  @IsOptional()
  @Field(() => GoalWhereInput, {
    nullable: true,
  })
  some?: GoalWhereInput;

  @ApiProperty({
    required: false,
    type: () => GoalWhereInput,
  })
  @ValidateNested()
  @Type(() => GoalWhereInput)
  @IsOptional()
  @Field(() => GoalWhereInput, {
    nullable: true,
  })
  none?: GoalWhereInput;
}
export { GoalListRelationFilter };
