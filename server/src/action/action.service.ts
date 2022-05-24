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

  async updateActionXP(action: Action): Promise<void> {
    const xpMultiplier: number = parseInt(process.env.XP_MULTIPLIER || '0', 10) || 10;
    if (action.start && action.end) {
      const minutes = (action.end.getTime() - action.start.getTime()) / 1000 / 60;
      const xp = minutes * xpMultiplier;
      await super.update({where: {id: action.id}, data: {minutes, xp }});
      this.logger.log(`Updating action ${action.id} xp to ${xp}`);
    }
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
  
  async update<T extends Prisma.ActionUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.ActionUpdateArgs>): Promise<Action> {
    const action = await super.update(args);
    await this.updateActionXP(action);
    return action;
  }

  async create<T extends Prisma.ActionCreateArgs>(args: Prisma.SelectSubset<T, Prisma.ActionCreateArgs>): Promise<Action> {
    const action = await super.create(args);
    await this.updateTodoRepitition(action.id);
    await this.updateActionXP(action);
    return action;
  }
}
