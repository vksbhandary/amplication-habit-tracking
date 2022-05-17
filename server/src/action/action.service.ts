import { Injectable, Logger } from "@nestjs/common";
import { Prisma, Action } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";
import { ActionServiceBase } from "./base/action.service.base";

@Injectable()
export class ActionService extends ActionServiceBase {
  logger = new Logger("ActionService");
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async updateTodoRepitition(actionId: string, todoId?:string): Promise<number> {
    const todoid = todoId? todoId: (await super.getTodo(actionId))?.id;
    if(todoid) {
      const count = await super.count({where: {todo:{id: todoid}}});
      this.logger.log(`Updating todo ${todoid} repitition to ${count}`);
      this.prisma.todo.update({where:{id: todoid}, data:{repetitions: count}});
      return count;
    }
    return 0;
  }

  async delete<T extends Prisma.ActionDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.ActionDeleteArgs>): Promise<Action> {
    let todoId = null;
    if(args.where.id) {
      todoId = (await super.getTodo(args.where.id))?.id;
    }
    const action = await super.delete(args);
    if(args.where.id && todoId) {
      await this.updateTodoRepitition(args.where.id, todoId);
    }
    return action;
  }

  async create<T extends Prisma.ActionCreateArgs>(args: Prisma.SelectSubset<T, Prisma.ActionCreateArgs>): Promise<Action> {
    const action = await super.create(args);
    await this.updateTodoRepitition(action.id);
    return action;
  }
}
