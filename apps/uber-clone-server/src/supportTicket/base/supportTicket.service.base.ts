/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  SupportTicket as PrismaSupportTicket,
  Provider as PrismaProvider,
  User as PrismaUser,
} from "@prisma/client";

export class SupportTicketServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SupportTicketCountArgs, "select">
  ): Promise<number> {
    return this.prisma.supportTicket.count(args);
  }

  async supportTickets<T extends Prisma.SupportTicketFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SupportTicketFindManyArgs>
  ): Promise<PrismaSupportTicket[]> {
    return this.prisma.supportTicket.findMany<Prisma.SupportTicketFindManyArgs>(
      args
    );
  }
  async supportTicket<T extends Prisma.SupportTicketFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SupportTicketFindUniqueArgs>
  ): Promise<PrismaSupportTicket | null> {
    return this.prisma.supportTicket.findUnique(args);
  }
  async createSupportTicket<T extends Prisma.SupportTicketCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SupportTicketCreateArgs>
  ): Promise<PrismaSupportTicket> {
    return this.prisma.supportTicket.create<T>(args);
  }
  async updateSupportTicket<T extends Prisma.SupportTicketUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SupportTicketUpdateArgs>
  ): Promise<PrismaSupportTicket> {
    return this.prisma.supportTicket.update<T>(args);
  }
  async deleteSupportTicket<T extends Prisma.SupportTicketDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SupportTicketDeleteArgs>
  ): Promise<PrismaSupportTicket> {
    return this.prisma.supportTicket.delete(args);
  }

  async getProvider(parentId: string): Promise<PrismaProvider | null> {
    return this.prisma.supportTicket
      .findUnique({
        where: { id: parentId },
      })
      .provider();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.supportTicket
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
