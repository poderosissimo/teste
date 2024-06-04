import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DocumentoService } from "./documento.service";
import { DocumentoControllerBase } from "./base/documento.controller.base";

@swagger.ApiTags("documentos")
@common.Controller("documentos")
export class DocumentoController extends DocumentoControllerBase {
  constructor(protected readonly service: DocumentoService) {
    super(service);
  }
}
