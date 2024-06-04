import * as graphql from "@nestjs/graphql";
import { ContatoResolverBase } from "./base/contato.resolver.base";
import { Contato } from "./base/Contato";
import { ContatoService } from "./contato.service";

@graphql.Resolver(() => Contato)
export class ContatoResolver extends ContatoResolverBase {
  constructor(protected readonly service: ContatoService) {
    super(service);
  }
}
