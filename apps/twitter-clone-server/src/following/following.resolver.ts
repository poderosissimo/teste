import * as graphql from "@nestjs/graphql";
import { FollowingResolverBase } from "./base/following.resolver.base";
import { Following } from "./base/Following";
import { FollowingService } from "./following.service";

@graphql.Resolver(() => Following)
export class FollowingResolver extends FollowingResolverBase {
  constructor(protected readonly service: FollowingService) {
    super(service);
  }
}
