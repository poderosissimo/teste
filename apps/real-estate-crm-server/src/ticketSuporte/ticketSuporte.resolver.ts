import * as graphql from "@nestjs/graphql";
import { TicketSuporteResolverBase } from "./base/ticketSuporte.resolver.base";
import { TicketSuporte } from "./base/TicketSuporte";
import { TicketSuporteService } from "./ticketSuporte.service";

@graphql.Resolver(() => TicketSuporte)
export class TicketSuporteResolver extends TicketSuporteResolverBase {
  constructor(protected readonly service: TicketSuporteService) {
    super(service);
  }
}
