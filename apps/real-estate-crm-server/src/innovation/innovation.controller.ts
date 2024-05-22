import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InnovationService } from "./innovation.service";
import { InnovationControllerBase } from "./base/innovation.controller.base";

@swagger.ApiTags("innovations")
@common.Controller("innovations")
export class InnovationController extends InnovationControllerBase {
  constructor(protected readonly service: InnovationService) {
    super(service);
  }
}
