import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PropostaService } from "./proposta.service";
import { PropostaControllerBase } from "./base/proposta.controller.base";

@swagger.ApiTags("propostas")
@common.Controller("propostas")
export class PropostaController extends PropostaControllerBase {
  constructor(protected readonly service: PropostaService) {
    super(service);
  }
}
