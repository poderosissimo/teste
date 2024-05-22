import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProjetoService } from "./projeto.service";
import { ProjetoControllerBase } from "./base/projeto.controller.base";

@swagger.ApiTags("projetos")
@common.Controller("projetos")
export class ProjetoController extends ProjetoControllerBase {
  constructor(protected readonly service: ProjetoService) {
    super(service);
  }
}
