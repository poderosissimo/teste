import * as graphql from "@nestjs/graphql";
import { RelatorioResolverBase } from "./base/relatorio.resolver.base";
import { Relatorio } from "./base/Relatorio";
import { RelatorioService } from "./relatorio.service";

@graphql.Resolver(() => Relatorio)
export class RelatorioResolver extends RelatorioResolverBase {
  constructor(protected readonly service: RelatorioService) {
    super(service);
  }
}
