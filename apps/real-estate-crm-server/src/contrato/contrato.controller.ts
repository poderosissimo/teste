import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContratoService } from "./contrato.service";
import { ContratoControllerBase } from "./base/contrato.controller.base";

@swagger.ApiTags("contratoes")
@common.Controller("contratoes")
export class ContratoController extends ContratoControllerBase {
  constructor(protected readonly service: ContratoService) {
    super(service);
  }
}
