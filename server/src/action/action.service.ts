import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ActionServiceBase } from "./base/action.service.base";

@Injectable()
export class ActionService extends ActionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
