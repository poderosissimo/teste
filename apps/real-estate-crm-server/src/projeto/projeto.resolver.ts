import * as graphql from "@nestjs/graphql";
import { ProjetoResolverBase } from "./base/projeto.resolver.base";
import { Projeto } from "./base/Projeto";
import { ProjetoService } from "./projeto.service";

@graphql.Resolver(() => Projeto)
export class ProjetoResolver extends ProjetoResolverBase {
  constructor(protected readonly service: ProjetoService) {
    super(service);
  }
}
