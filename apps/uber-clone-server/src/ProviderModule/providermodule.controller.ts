import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ProviderModuleService } from "./providermodule.service";

@swagger.ApiTags("providerModules")
@common.Controller("providerModules")
export class ProviderModuleController {
  constructor(protected readonly service: ProviderModuleService) {}
}
