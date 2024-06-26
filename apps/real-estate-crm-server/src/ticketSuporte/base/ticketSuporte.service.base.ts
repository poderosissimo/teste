/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, TicketSuporte as PrismaTicketSuporte } from "@prisma/client";

export class TicketSuporteServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TicketSuporteCountArgs, "select">
  ): Promise<number> {
    return this.prisma.ticketSuporte.count(args);
  }

  async ticketSuportes<T extends Prisma.TicketSuporteFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TicketSuporteFindManyArgs>
  ): Promise<PrismaTicketSuporte[]> {
    return this.prisma.ticketSuporte.findMany<Prisma.TicketSuporteFindManyArgs>(
      args
    );
  }
  async ticketSuporte<T extends Prisma.TicketSuporteFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TicketSuporteFindUniqueArgs>
  ): Promise<PrismaTicketSuporte | null> {
    return this.prisma.ticketSuporte.findUnique(args);
  }
  async createTicketSuporte<T extends Prisma.TicketSuporteCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TicketSuporteCreateArgs>
  ): Promise<PrismaTicketSuporte> {
    return this.prisma.ticketSuporte.create<T>(args);
  }
  async updateTicketSuporte<T extends Prisma.TicketSuporteUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TicketSuporteUpdateArgs>
  ): Promise<PrismaTicketSuporte> {
    return this.prisma.ticketSuporte.update<T>(args);
  }
  async deleteTicketSuporte<T extends Prisma.TicketSuporteDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TicketSuporteDeleteArgs>
  ): Promise<PrismaTicketSuporte> {
    return this.prisma.ticketSuporte.delete(args);
  }
}
