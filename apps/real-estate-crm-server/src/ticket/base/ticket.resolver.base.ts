/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Ticket } from "./Ticket";
import { TicketCountArgs } from "./TicketCountArgs";
import { TicketFindManyArgs } from "./TicketFindManyArgs";
import { TicketFindUniqueArgs } from "./TicketFindUniqueArgs";
import { CreateTicketArgs } from "./CreateTicketArgs";
import { UpdateTicketArgs } from "./UpdateTicketArgs";
import { DeleteTicketArgs } from "./DeleteTicketArgs";
import { TicketService } from "../ticket.service";
@graphql.Resolver(() => Ticket)
export class TicketResolverBase {
  constructor(protected readonly service: TicketService) {}

  async _ticketsMeta(
    @graphql.Args() args: TicketCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Ticket])
  async tickets(@graphql.Args() args: TicketFindManyArgs): Promise<Ticket[]> {
    return this.service.tickets(args);
  }

  @graphql.Query(() => Ticket, { nullable: true })
  async ticket(
    @graphql.Args() args: TicketFindUniqueArgs
  ): Promise<Ticket | null> {
    const result = await this.service.ticket(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Ticket)
  async createTicket(@graphql.Args() args: CreateTicketArgs): Promise<Ticket> {
    return await this.service.createTicket({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Ticket)
  async updateTicket(
    @graphql.Args() args: UpdateTicketArgs
  ): Promise<Ticket | null> {
    try {
      return await this.service.updateTicket({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Ticket)
  async deleteTicket(
    @graphql.Args() args: DeleteTicketArgs
  ): Promise<Ticket | null> {
    try {
      return await this.service.deleteTicket(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
