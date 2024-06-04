import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RelatorioService } from "./relatorio.service";
import { RelatorioControllerBase } from "./base/relatorio.controller.base";

@swagger.ApiTags("relatorios")
@common.Controller("relatorios")
export class RelatorioController extends RelatorioControllerBase {
  constructor(protected readonly service: RelatorioService) {
    super(service);
  }
}
