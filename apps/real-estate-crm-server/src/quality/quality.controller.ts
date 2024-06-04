import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QualityService } from "./quality.service";
import { QualityControllerBase } from "./base/quality.controller.base";

@swagger.ApiTags("qualities")
@common.Controller("qualities")
export class QualityController extends QualityControllerBase {
  constructor(protected readonly service: QualityService) {
    super(service);
  }
}
