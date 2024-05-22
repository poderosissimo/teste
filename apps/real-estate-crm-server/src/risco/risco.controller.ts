import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RiscoService } from "./risco.service";
import { RiscoControllerBase } from "./base/risco.controller.base";

@swagger.ApiTags("riscos")
@common.Controller("riscos")
export class RiscoController extends RiscoControllerBase {
  constructor(protected readonly service: RiscoService) {
    super(service);
  }
}
