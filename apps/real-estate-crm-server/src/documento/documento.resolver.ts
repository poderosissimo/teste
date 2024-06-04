import * as graphql from "@nestjs/graphql";
import { DocumentoResolverBase } from "./base/documento.resolver.base";
import { Documento } from "./base/Documento";
import { DocumentoService } from "./documento.service";

@graphql.Resolver(() => Documento)
export class DocumentoResolver extends DocumentoResolverBase {
  constructor(protected readonly service: DocumentoService) {
    super(service);
  }
}
