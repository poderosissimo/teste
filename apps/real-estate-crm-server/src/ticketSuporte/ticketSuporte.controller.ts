import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TicketSuporteService } from "./ticketSuporte.service";
import { TicketSuporteControllerBase } from "./base/ticketSuporte.controller.base";

@swagger.ApiTags("ticketSuportes")
@common.Controller("ticketSuportes")
export class TicketSuporteController extends TicketSuporteControllerBase {
  constructor(protected readonly service: TicketSuporteService) {
    super(service);
  }
}
