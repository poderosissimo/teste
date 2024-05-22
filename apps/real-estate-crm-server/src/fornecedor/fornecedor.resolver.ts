import * as graphql from "@nestjs/graphql";
import { FornecedorResolverBase } from "./base/fornecedor.resolver.base";
import { Fornecedor } from "./base/Fornecedor";
import { FornecedorService } from "./fornecedor.service";

@graphql.Resolver(() => Fornecedor)
export class FornecedorResolver extends FornecedorResolverBase {
  constructor(protected readonly service: FornecedorService) {
    super(service);
  }
}
