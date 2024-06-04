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
import { Provider } from "./Provider";
import { ProviderCountArgs } from "./ProviderCountArgs";
import { ProviderFindManyArgs } from "./ProviderFindManyArgs";
import { ProviderFindUniqueArgs } from "./ProviderFindUniqueArgs";
import { CreateProviderArgs } from "./CreateProviderArgs";
import { UpdateProviderArgs } from "./UpdateProviderArgs";
import { DeleteProviderArgs } from "./DeleteProviderArgs";
import { ReviewFindManyArgs } from "../../review/base/ReviewFindManyArgs";
import { Review } from "../../review/base/Review";
import { ServiceBookingFindManyArgs } from "../../serviceBooking/base/ServiceBookingFindManyArgs";
import { ServiceBooking } from "../../serviceBooking/base/ServiceBooking";
import { SupportTicketFindManyArgs } from "../../supportTicket/base/SupportTicketFindManyArgs";
import { SupportTicket } from "../../supportTicket/base/SupportTicket";
import { ProviderService } from "../provider.service";
@graphql.Resolver(() => Provider)
export class ProviderResolverBase {
  constructor(protected readonly service: ProviderService) {}

  async _providersMeta(
    @graphql.Args() args: ProviderCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Provider])
  async providers(
    @graphql.Args() args: ProviderFindManyArgs
  ): Promise<Provider[]> {
    return this.service.providers(args);
  }

  @graphql.Query(() => Provider, { nullable: true })
  async provider(
    @graphql.Args() args: ProviderFindUniqueArgs
  ): Promise<Provider | null> {
    const result = await this.service.provider(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Provider)
  async createProvider(
    @graphql.Args() args: CreateProviderArgs
  ): Promise<Provider> {
    return await this.service.createProvider({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Provider)
  async updateProvider(
    @graphql.Args() args: UpdateProviderArgs
  ): Promise<Provider | null> {
    try {
      return await this.service.updateProvider({
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

  @graphql.Mutation(() => Provider)
  async deleteProvider(
    @graphql.Args() args: DeleteProviderArgs
  ): Promise<Provider | null> {
    try {
      return await this.service.deleteProvider(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Review], { name: "reviews" })
  async findReviews(
    @graphql.Parent() parent: Provider,
    @graphql.Args() args: ReviewFindManyArgs
  ): Promise<Review[]> {
    const results = await this.service.findReviews(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [ServiceBooking], { name: "serviceBookings" })
  async findServiceBookings(
    @graphql.Parent() parent: Provider,
    @graphql.Args() args: ServiceBookingFindManyArgs
  ): Promise<ServiceBooking[]> {
    const results = await this.service.findServiceBookings(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [SupportTicket], { name: "supportTickets" })
  async findSupportTickets(
    @graphql.Parent() parent: Provider,
    @graphql.Args() args: SupportTicketFindManyArgs
  ): Promise<SupportTicket[]> {
    const results = await this.service.findSupportTickets(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}