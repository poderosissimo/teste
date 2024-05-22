import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SupportTicketModuleService } from "./supportticketmodule.service";

@swagger.ApiTags("supportTicketModules")
@common.Controller("supportTicketModules")
export class SupportTicketModuleController {
  constructor(protected readonly service: SupportTicketModuleService) {}
}
