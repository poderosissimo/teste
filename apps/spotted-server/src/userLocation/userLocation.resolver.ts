import * as graphql from "@nestjs/graphql";
import { UserLocationResolverBase } from "./base/userLocation.resolver.base";
import { UserLocation } from "./base/UserLocation";
import { UserLocationService } from "./userLocation.service";

@graphql.Resolver(() => UserLocation)
export class UserLocationResolver extends UserLocationResolverBase {
  constructor(protected readonly service: UserLocationService) {
    super(service);
  }
}
