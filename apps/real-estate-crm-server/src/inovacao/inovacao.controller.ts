import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InovacaoService } from "./inovacao.service";
import { InovacaoControllerBase } from "./base/inovacao.controller.base";

@swagger.ApiTags("inovacaos")
@common.Controller("inovacaos")
export class InovacaoController extends InovacaoControllerBase {
  constructor(protected readonly service: InovacaoService) {
    super(service);
  }
}
