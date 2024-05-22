import * as graphql from "@nestjs/graphql";
import { IdeiaResolverBase } from "./base/ideia.resolver.base";
import { Ideia } from "./base/Ideia";
import { IdeiaService } from "./ideia.service";

@graphql.Resolver(() => Ideia)
export class IdeiaResolver extends IdeiaResolverBase {
  constructor(protected readonly service: IdeiaService) {
    super(service);
  }
}
