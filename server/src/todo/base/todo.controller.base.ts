/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TodoService } from "../todo.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TodoCreateInput } from "./TodoCreateInput";
import { TodoWhereInput } from "./TodoWhereInput";
import { TodoWhereUniqueInput } from "./TodoWhereUniqueInput";
import { TodoFindManyArgs } from "./TodoFindManyArgs";
import { TodoUpdateInput } from "./TodoUpdateInput";
import { Todo } from "./Todo";
import { ActionFindManyArgs } from "../../action/base/ActionFindManyArgs";
import { Action } from "../../action/base/Action";
import { ActionWhereUniqueInput } from "../../action/base/ActionWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TodoControllerBase {
  constructor(
    protected readonly service: TodoService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Todo",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Todo })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: TodoCreateInput): Promise<Todo> {
    return await this.service.create({
      data: {
        ...data,

        goal: data.goal
          ? {
              connect: data.goal,
            }
          : undefined,
      },
      select: {
        allotedTime: true,
        createdAt: true,
        description: true,
        end: true,

        goal: {
          select: {
            id: true,
          },
        },

        id: true,
        repeatBasis: true,
        repeated: true,
        repetitions: true,
        start: true,
        status: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Todo",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Todo] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(TodoFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Todo[]> {
    const args = plainToClass(TodoFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        allotedTime: true,
        createdAt: true,
        description: true,
        end: true,

        goal: {
          select: {
            id: true,
          },
        },

        id: true,
        repeatBasis: true,
        repeated: true,
        repetitions: true,
        start: true,
        status: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Todo",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Todo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: TodoWhereUniqueInput
  ): Promise<Todo | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        allotedTime: true,
        createdAt: true,
        description: true,
        end: true,

        goal: {
          select: {
            id: true,
          },
        },

        id: true,
        repeatBasis: true,
        repeated: true,
        repetitions: true,
        start: true,
        status: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Todo",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Todo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: TodoWhereUniqueInput,
    @common.Body() data: TodoUpdateInput
  ): Promise<Todo | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          goal: data.goal
            ? {
                connect: data.goal,
              }
            : undefined,
        },
        select: {
          allotedTime: true,
          createdAt: true,
          description: true,
          end: true,

          goal: {
            select: {
              id: true,
            },
          },

          id: true,
          repeatBasis: true,
          repeated: true,
          repetitions: true,
          start: true,
          status: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "Todo",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Todo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: TodoWhereUniqueInput
  ): Promise<Todo | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          allotedTime: true,
          createdAt: true,
          description: true,
          end: true,

          goal: {
            select: {
              id: true,
            },
          },

          id: true,
          repeatBasis: true,
          repeated: true,
          repetitions: true,
          start: true,
          status: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Action",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/actions")
  @ApiNestedQuery(ActionFindManyArgs)
  async findManyActions(
    @common.Req() request: Request,
    @common.Param() params: TodoWhereUniqueInput
  ): Promise<Action[]> {
    const query = plainToClass(ActionFindManyArgs, request.query);
    const results = await this.service.findActions(params.id, {
      ...query,
      select: {
        createdAt: true,
        end: true,
        id: true,
        minutes: true,
        start: true,
        status: true,

        todo: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        xp: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Todo",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/actions")
  async connectActions(
    @common.Param() params: TodoWhereUniqueInput,
    @common.Body() body: ActionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      actions: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Todo",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/actions")
  async updateActions(
    @common.Param() params: TodoWhereUniqueInput,
    @common.Body() body: ActionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      actions: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Todo",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/actions")
  async disconnectActions(
    @common.Param() params: TodoWhereUniqueInput,
    @common.Body() body: ActionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      actions: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
