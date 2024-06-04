import * as graphql from "@nestjs/graphql";
import { CampanhaMarketingResolverBase } from "./base/campanhaMarketing.resolver.base";
import { CampanhaMarketing } from "./base/CampanhaMarketing";
import { CampanhaMarketingService } from "./campanhaMarketing.service";

@graphql.Resolver(() => CampanhaMarketing)
export class CampanhaMarketingResolver extends CampanhaMarketingResolverBase {
  constructor(protected readonly service: CampanhaMarketingService) {
    super(service);
  }
}
