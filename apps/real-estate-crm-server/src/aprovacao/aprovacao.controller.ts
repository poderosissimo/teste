import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AprovacaoService } from "./aprovacao.service";
import { AprovacaoControllerBase } from "./base/aprovacao.controller.base";

@swagger.ApiTags("aprovacaos")
@common.Controller("aprovacaos")
export class AprovacaoController extends AprovacaoControllerBase {
  constructor(protected readonly service: AprovacaoService) {
    super(service);
  }
}
