import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IdeiaService } from "./ideia.service";
import { IdeiaControllerBase } from "./base/ideia.controller.base";

@swagger.ApiTags("ideias")
@common.Controller("ideias")
export class IdeiaController extends IdeiaControllerBase {
  constructor(protected readonly service: IdeiaService) {
    super(service);
  }
}
