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
import { ActionUpdateManyWithoutTodosInput } from "./ActionUpdateManyWithoutTodosInput";
import {
  ValidateNested,
  IsOptional,
  IsInt,
  IsString,
  IsDate,
  IsEnum,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { GoalWhereUniqueInput } from "../../goal/base/GoalWhereUniqueInput";
import { EnumTodoRepeatBasis } from "./EnumTodoRepeatBasis";
import { EnumTodoStatus } from "./EnumTodoStatus";
@InputType()
class TodoUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ActionUpdateManyWithoutTodosInput,
  })
  @ValidateNested()
  @Type(() => ActionUpdateManyWithoutTodosInput)
  @IsOptional()
  @Field(() => ActionUpdateManyWithoutTodosInput, {
    nullable: true,
  })
  actions?: ActionUpdateManyWithoutTodosInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  allotedTime?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  end?: Date | null;

  @ApiProperty({
    required: false,
    type: () => GoalWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GoalWhereUniqueInput)
  @IsOptional()
  @Field(() => GoalWhereUniqueInput, {
    nullable: true,
  })
  goal?: GoalWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumTodoRepeatBasis,
  })
  @IsEnum(EnumTodoRepeatBasis)
  @IsOptional()
  @Field(() => EnumTodoRepeatBasis, {
    nullable: true,
  })
  repeatBasis?:
    | "Daily"
    | "Weekly"
    | "BiWeekly"
    | "Monthly"
    | "BiMonthly"
    | "FirstWeekdayOfMonth"
    | "LastWeekdayOfMonth"
    | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  repeated?: boolean | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  repetitions?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  start?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumTodoStatus,
  })
  @IsEnum(EnumTodoStatus)
  @IsOptional()
  @Field(() => EnumTodoStatus, {
    nullable: true,
  })
  status?: "Completed" | "InProgress" | "Backlog" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}
export { TodoUpdateInput };
