/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateActionArgs } from "./CreateActionArgs";
import { UpdateActionArgs } from "./UpdateActionArgs";
import { DeleteActionArgs } from "./DeleteActionArgs";
import { ActionFindManyArgs } from "./ActionFindManyArgs";
import { ActionFindUniqueArgs } from "./ActionFindUniqueArgs";
import { Action } from "./Action";
import { Todo } from "../../todo/base/Todo";
import { ActionService } from "../action.service";

@graphql.Resolver(() => Action)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ActionResolverBase {
  constructor(
    protected readonly service: ActionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Action",
    action: "read",
    possession: "any",
  })
  async _actionsMeta(
    @graphql.Args() args: ActionFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Action])
  @nestAccessControl.UseRoles({
    resource: "Action",
    action: "read",
    possession: "any",
  })
  async actions(@graphql.Args() args: ActionFindManyArgs): Promise<Action[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Action, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Action",
    action: "read",
    possession: "own",
  })
  async action(
    @graphql.Args() args: ActionFindUniqueArgs
  ): Promise<Action | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Action)
  @nestAccessControl.UseRoles({
    resource: "Action",
    action: "create",
    possession: "any",
  })
  async createAction(@graphql.Args() args: CreateActionArgs): Promise<Action> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        todo: args.data.todo
          ? {
              connect: args.data.todo,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Action)
  @nestAccessControl.UseRoles({
    resource: "Action",
    action: "update",
    possession: "any",
  })
  async updateAction(
    @graphql.Args() args: UpdateActionArgs
  ): Promise<Action | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          todo: args.data.todo
            ? {
                connect: args.data.todo,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Action)
  @nestAccessControl.UseRoles({
    resource: "Action",
    action: "delete",
    possession: "any",
  })
  async deleteAction(
    @graphql.Args() args: DeleteActionArgs
  ): Promise<Action | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Todo, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Todo",
    action: "read",
    possession: "any",
  })
  async todo(@graphql.Parent() parent: Action): Promise<Todo | null> {
    const result = await this.service.getTodo(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}