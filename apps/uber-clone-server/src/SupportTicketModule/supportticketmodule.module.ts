import { Module } from "@nestjs/common";
import { SupportTicketModuleService } from "./supportticketmodule.service";
import { SupportTicketModuleController } from "./supportticketmodule.controller";
import { SupportTicketModuleResolver } from "./supportticketmodule.resolver";

@Module({
  controllers: [SupportTicketModuleController],
  providers: [SupportTicketModuleService, SupportTicketModuleResolver],
  exports: [SupportTicketModuleService],
})
export class SupportTicketModuleModule {}
