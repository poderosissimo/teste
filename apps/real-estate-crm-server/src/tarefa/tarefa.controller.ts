import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TarefaService } from "./tarefa.service";
import { TarefaControllerBase } from "./base/tarefa.controller.base";

@swagger.ApiTags("tarefas")
@common.Controller("tarefas")
export class TarefaController extends TarefaControllerBase {
  constructor(protected readonly service: TarefaService) {
    super(service);
  }
}
