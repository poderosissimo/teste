import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ReviewModuleService } from "./reviewmodule.service";

@swagger.ApiTags("reviewModules")
@common.Controller("reviewModules")
export class ReviewModuleController {
  constructor(protected readonly service: ReviewModuleService) {}
}
