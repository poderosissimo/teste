import * as graphql from "@nestjs/graphql";
import { InnovationResolverBase } from "./base/innovation.resolver.base";
import { Innovation } from "./base/Innovation";
import { InnovationService } from "./innovation.service";

@graphql.Resolver(() => Innovation)
export class InnovationResolver extends InnovationResolverBase {
  constructor(protected readonly service: InnovationService) {
    super(service);
  }
}
