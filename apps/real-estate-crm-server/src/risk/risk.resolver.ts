import * as graphql from "@nestjs/graphql";
import { RiskResolverBase } from "./base/risk.resolver.base";
import { Risk } from "./base/Risk";
import { RiskService } from "./risk.service";

@graphql.Resolver(() => Risk)
export class RiskResolver extends RiskResolverBase {
  constructor(protected readonly service: RiskService) {
    super(service);
  }
}
