/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Action } from "../../action/base/Action";
import {
  ValidateNested,
  IsOptional,
  IsInt,
  IsDate,
  IsString,
  IsEnum,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { Goal } from "../../goal/base/Goal";
import { EnumTodoRepeatBasis } from "./EnumTodoRepeatBasis";
import { EnumTodoStatus } from "./EnumTodoStatus";
@ObjectType()
class Todo {
  @ApiProperty({
    required: false,
    type: () => [Action],
  })
  @ValidateNested()
  @Type(() => Action)
  @IsOptional()
  actions?: Array<Action>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  allotedTime!: number | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description!: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  end!: Date | null;

  @ApiProperty({
    required: false,
    type: () => Goal,
  })
  @ValidateNested()
  @Type(() => Goal)
  @IsOptional()
  goal?: Goal | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

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
  repeated!: boolean | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  start!: Date | null;

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
  title!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Todo };
