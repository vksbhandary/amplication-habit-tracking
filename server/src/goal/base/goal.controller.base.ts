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
import { GoalService } from "../goal.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GoalCreateInput } from "./GoalCreateInput";
import { GoalWhereInput } from "./GoalWhereInput";
import { GoalWhereUniqueInput } from "./GoalWhereUniqueInput";
import { GoalFindManyArgs } from "./GoalFindManyArgs";
import { GoalUpdateInput } from "./GoalUpdateInput";
import { Goal } from "./Goal";
import { TodoFindManyArgs } from "../../todo/base/TodoFindManyArgs";
import { Todo } from "../../todo/base/Todo";
import { TodoWhereUniqueInput } from "../../todo/base/TodoWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GoalControllerBase {
  constructor(
    protected readonly service: GoalService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Goal",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Goal })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: GoalCreateInput): Promise<Goal> {
    return await this.service.create({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Goal",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Goal] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(GoalFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Goal[]> {
    const args = plainToClass(GoalFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Goal",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Goal })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: GoalWhereUniqueInput
  ): Promise<Goal | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
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
    resource: "Goal",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Goal })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: GoalWhereUniqueInput,
    @common.Body() data: GoalUpdateInput
  ): Promise<Goal | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          description: true,
          id: true,
          title: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
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
    resource: "Goal",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Goal })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: GoalWhereUniqueInput
  ): Promise<Goal | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          title: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
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
    resource: "Todo",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/todos")
  @ApiNestedQuery(TodoFindManyArgs)
  async findManyTodos(
    @common.Req() request: Request,
    @common.Param() params: GoalWhereUniqueInput
  ): Promise<Todo[]> {
    const query = plainToClass(TodoFindManyArgs, request.query);
    const results = await this.service.findTodos(params.id, {
      ...query,
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
        repeateBasis: true,
        repeated: true,
        start: true,
        status: true,
        title: true,
        updatedAt: true,
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
    resource: "Goal",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/todos")
  async connectTodos(
    @common.Param() params: GoalWhereUniqueInput,
    @common.Body() body: TodoWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      todos: {
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
    resource: "Goal",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/todos")
  async updateTodos(
    @common.Param() params: GoalWhereUniqueInput,
    @common.Body() body: TodoWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      todos: {
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
    resource: "Goal",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/todos")
  async disconnectTodos(
    @common.Param() params: GoalWhereUniqueInput,
    @common.Body() body: TodoWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      todos: {
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