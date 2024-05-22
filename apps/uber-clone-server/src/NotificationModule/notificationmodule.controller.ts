import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { NotificationModuleService } from "./notificationmodule.service";

@swagger.ApiTags("notificationModules")
@common.Controller("notificationModules")
export class NotificationModuleController {
  constructor(protected readonly service: NotificationModuleService) {}
}
