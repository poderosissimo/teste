import * as graphql from "@nestjs/graphql";
import { QualityResolverBase } from "./base/quality.resolver.base";
import { Quality } from "./base/Quality";
import { QualityService } from "./quality.service";

@graphql.Resolver(() => Quality)
export class QualityResolver extends QualityResolverBase {
  constructor(protected readonly service: QualityService) {
    super(service);
  }
}
