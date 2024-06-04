import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TicketSuporteServiceBase } from "./base/ticketSuporte.service.base";

@Injectable()
export class TicketSuporteService extends TicketSuporteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
