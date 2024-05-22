import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LeadCadastroService } from "./leadCadastro.service";
import { LeadCadastroControllerBase } from "./base/leadCadastro.controller.base";

@swagger.ApiTags("leadCadastros")
@common.Controller("leadCadastros")
export class LeadCadastroController extends LeadCadastroControllerBase {
  constructor(protected readonly service: LeadCadastroService) {
    super(service);
  }
}
