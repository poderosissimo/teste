import * as graphql from "@nestjs/graphql";
import { ManutencaoResolverBase } from "./base/manutencao.resolver.base";
import { Manutencao } from "./base/Manutencao";
import { ManutencaoService } from "./manutencao.service";

@graphql.Resolver(() => Manutencao)
export class ManutencaoResolver extends ManutencaoResolverBase {
  constructor(protected readonly service: ManutencaoService) {
    super(service);
  }
}
