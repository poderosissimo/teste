import { Module } from "@nestjs/common";
import { TicketSuporteModuleBase } from "./base/ticketSuporte.module.base";
import { TicketSuporteService } from "./ticketSuporte.service";
import { TicketSuporteController } from "./ticketSuporte.controller";
import { TicketSuporteResolver } from "./ticketSuporte.resolver";

@Module({
  imports: [TicketSuporteModuleBase],
  controllers: [TicketSuporteController],
  providers: [TicketSuporteService, TicketSuporteResolver],
  exports: [TicketSuporteService],
})
export class TicketSuporteModule {}
