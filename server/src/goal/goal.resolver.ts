import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GoalResolverBase } from "./base/goal.resolver.base";
import { Goal } from "./base/Goal";
import { GoalService } from "./goal.service";

@graphql.Resolver(() => Goal)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class GoalResolver extends GoalResolverBase {
  constructor(
    protected readonly service: GoalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
