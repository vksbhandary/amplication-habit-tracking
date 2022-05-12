import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GoalService } from "./goal.service";
import { GoalControllerBase } from "./base/goal.controller.base";

@swagger.ApiTags("goals")
@common.Controller("goals")
export class GoalController extends GoalControllerBase {
  constructor(
    protected readonly service: GoalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
