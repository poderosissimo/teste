import * as graphql from "@nestjs/graphql";
import { PropostaResolverBase } from "./base/proposta.resolver.base";
import { Proposta } from "./base/Proposta";
import { PropostaService } from "./proposta.service";

@graphql.Resolver(() => Proposta)
export class PropostaResolver extends PropostaResolverBase {
  constructor(protected readonly service: PropostaService) {
    super(service);
  }
}
