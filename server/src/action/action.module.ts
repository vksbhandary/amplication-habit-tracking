import { Module } from "@nestjs/common";
import { ActionModuleBase } from "./base/action.module.base";
import { ActionService } from "./action.service";
import { ActionController } from "./action.controller";
import { ActionResolver } from "./action.resolver";

@Module({
  imports: [ActionModuleBase],
  controllers: [ActionController],
  providers: [ActionService, ActionResolver],
  exports: [ActionService],
})
export class ActionModule {}
