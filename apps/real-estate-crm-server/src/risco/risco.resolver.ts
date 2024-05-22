import * as graphql from "@nestjs/graphql";
import { RiscoResolverBase } from "./base/risco.resolver.base";
import { Risco } from "./base/Risco";
import { RiscoService } from "./risco.service";

@graphql.Resolver(() => Risco)
export class RiscoResolver extends RiscoResolverBase {
  constructor(protected readonly service: RiscoService) {
    super(service);
  }
}
