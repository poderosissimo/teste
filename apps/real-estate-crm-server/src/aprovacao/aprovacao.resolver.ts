import * as graphql from "@nestjs/graphql";
import { AprovacaoResolverBase } from "./base/aprovacao.resolver.base";
import { Aprovacao } from "./base/Aprovacao";
import { AprovacaoService } from "./aprovacao.service";

@graphql.Resolver(() => Aprovacao)
export class AprovacaoResolver extends AprovacaoResolverBase {
  constructor(protected readonly service: AprovacaoService) {
    super(service);
  }
}
