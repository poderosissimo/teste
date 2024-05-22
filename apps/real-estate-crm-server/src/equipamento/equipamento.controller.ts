import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EquipamentoService } from "./equipamento.service";
import { EquipamentoControllerBase } from "./base/equipamento.controller.base";

@swagger.ApiTags("equipamentos")
@common.Controller("equipamentos")
export class EquipamentoController extends EquipamentoControllerBase {
  constructor(protected readonly service: EquipamentoService) {
    super(service);
  }
}
