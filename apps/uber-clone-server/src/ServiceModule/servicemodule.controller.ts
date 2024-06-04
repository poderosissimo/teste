import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ServiceModuleService } from "./servicemodule.service";

@swagger.ApiTags("serviceModules")
@common.Controller("serviceModules")
export class ServiceModuleController {
  constructor(protected readonly service: ServiceModuleService) {}
}
