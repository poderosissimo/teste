import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ManutencaoService } from "./manutencao.service";
import { ManutencaoControllerBase } from "./base/manutencao.controller.base";

@swagger.ApiTags("manutencaos")
@common.Controller("manutencaos")
export class ManutencaoController extends ManutencaoControllerBase {
  constructor(protected readonly service: ManutencaoService) {
    super(service);
  }
}
