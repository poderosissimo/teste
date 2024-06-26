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
import { SupportTicket } from "./SupportTicket";
import { SupportTicketCountArgs } from "./SupportTicketCountArgs";
import { SupportTicketFindManyArgs } from "./SupportTicketFindManyArgs";
import { SupportTicketFindUniqueArgs } from "./SupportTicketFindUniqueArgs";
import { CreateSupportTicketArgs } from "./CreateSupportTicketArgs";
import { UpdateSupportTicketArgs } from "./UpdateSupportTicketArgs";
import { DeleteSupportTicketArgs } from "./DeleteSupportTicketArgs";
import { Provider } from "../../provider/base/Provider";
import { User } from "../../user/base/User";
import { SupportTicketService } from "../supportTicket.service";
@graphql.Resolver(() => SupportTicket)
export class SupportTicketResolverBase {
  constructor(protected readonly service: SupportTicketService) {}

  async _supportTicketsMeta(
    @graphql.Args() args: SupportTicketCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SupportTicket])
  async supportTickets(
    @graphql.Args() args: SupportTicketFindManyArgs
  ): Promise<SupportTicket[]> {
    return this.service.supportTickets(args);
  }

  @graphql.Query(() => SupportTicket, { nullable: true })
  async supportTicket(
    @graphql.Args() args: SupportTicketFindUniqueArgs
  ): Promise<SupportTicket | null> {
    const result = await this.service.supportTicket(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SupportTicket)
  async createSupportTicket(
    @graphql.Args() args: CreateSupportTicketArgs
  ): Promise<SupportTicket> {
    return await this.service.createSupportTicket({
      ...args,
      data: {
        ...args.data,

        provider: args.data.provider
          ? {
              connect: args.data.provider,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => SupportTicket)
  async updateSupportTicket(
    @graphql.Args() args: UpdateSupportTicketArgs
  ): Promise<SupportTicket | null> {
    try {
      return await this.service.updateSupportTicket({
        ...args,
        data: {
          ...args.data,

          provider: args.data.provider
            ? {
                connect: args.data.provider,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => SupportTicket)
  async deleteSupportTicket(
    @graphql.Args() args: DeleteSupportTicketArgs
  ): Promise<SupportTicket | null> {
    try {
      return await this.service.deleteSupportTicket(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Provider, {
    nullable: true,
    name: "provider",
  })
  async getProvider(
    @graphql.Parent() parent: SupportTicket
  ): Promise<Provider | null> {
    const result = await this.service.getProvider(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: SupportTicket): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
