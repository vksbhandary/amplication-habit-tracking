/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Action, Todo } from "@prisma/client";

export class ActionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ActionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ActionFindManyArgs>
  ): Promise<number> {
    return this.prisma.action.count(args);
  }

  async findMany<T extends Prisma.ActionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ActionFindManyArgs>
  ): Promise<Action[]> {
    return this.prisma.action.findMany(args);
  }
  async findOne<T extends Prisma.ActionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ActionFindUniqueArgs>
  ): Promise<Action | null> {
    return this.prisma.action.findUnique(args);
  }
  async create<T extends Prisma.ActionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ActionCreateArgs>
  ): Promise<Action> {
    return this.prisma.action.create<T>(args);
  }
  async update<T extends Prisma.ActionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ActionUpdateArgs>
  ): Promise<Action> {
    return this.prisma.action.update<T>(args);
  }
  async delete<T extends Prisma.ActionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ActionDeleteArgs>
  ): Promise<Action> {
    return this.prisma.action.delete(args);
  }

  async getTodo(parentId: string): Promise<Todo | null> {
    return this.prisma.action
      .findUnique({
        where: { id: parentId },
      })
      .todo();
  }
}
