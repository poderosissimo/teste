import * as graphql from "@nestjs/graphql";
import { SupportTicketModuleService } from "./supportticketmodule.service";

export class SupportTicketModuleResolver {
  constructor(protected readonly service: SupportTicketModuleService) {}
}
