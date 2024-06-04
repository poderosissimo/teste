import * as graphql from "@nestjs/graphql";
import { InovacaoResolverBase } from "./base/inovacao.resolver.base";
import { Inovacao } from "./base/Inovacao";
import { InovacaoService } from "./inovacao.service";

@graphql.Resolver(() => Inovacao)
export class InovacaoResolver extends InovacaoResolverBase {
  constructor(protected readonly service: InovacaoService) {
    super(service);
  }
}
