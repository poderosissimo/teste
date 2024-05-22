import * as graphql from "@nestjs/graphql";
import { ContratoResolverBase } from "./base/contrato.resolver.base";
import { Contrato } from "./base/Contrato";
import { ContratoService } from "./contrato.service";

@graphql.Resolver(() => Contrato)
export class ContratoResolver extends ContratoResolverBase {
  constructor(protected readonly service: ContratoService) {
    super(service);
  }
}
