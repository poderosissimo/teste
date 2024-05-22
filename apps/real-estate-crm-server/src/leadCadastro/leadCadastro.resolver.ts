import * as graphql from "@nestjs/graphql";
import { LeadCadastroResolverBase } from "./base/leadCadastro.resolver.base";
import { LeadCadastro } from "./base/LeadCadastro";
import { LeadCadastroService } from "./leadCadastro.service";

@graphql.Resolver(() => LeadCadastro)
export class LeadCadastroResolver extends LeadCadastroResolverBase {
  constructor(protected readonly service: LeadCadastroService) {
    super(service);
  }
}
