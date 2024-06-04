import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContatoService } from "./contato.service";
import { ContatoControllerBase } from "./base/contato.controller.base";

@swagger.ApiTags("contatoes")
@common.Controller("contatoes")
export class ContatoController extends ContatoControllerBase {
  constructor(protected readonly service: ContatoService) {
    super(service);
  }
}
