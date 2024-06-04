import * as graphql from "@nestjs/graphql";
import { BookRideInput } from "../serviceBookingModule/BookRideInput";
import { RateRideInput } from "../serviceBookingModule/RateRideInput";
import { UpdateRideBookingInput } from "../serviceBookingModule/UpdateRideBookingInput";
import { ServiceBookingModuleService } from "./servicebookingmodule.service";

export class ServiceBookingModuleResolver {
  constructor(protected readonly service: ServiceBookingModuleService) {}

  @graphql.Query(() => String)
  async BookRide(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.BookRide(args);
  }

  @graphql.Mutation(() => String)
  async CancelRide(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CancelRide(args);
  }

  @graphql.Query(() => String)
  async GetRideStatus(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetRideStatus(args);
  }

  @graphql.Mutation(() => BookRideInput)
  async NewRideBooking(
    @graphql.Args()
    args: BookRideInput
  ): Promise<BookRideInput> {
    return this.service.NewRideBooking(args);
  }

  @graphql.Query(() => String)
  async RateRide(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.RateRide(args);
  }

  @graphql.Mutation(() => RateRideInput)
  async RatingRideExperience(
    @graphql.Args()
    args: RateRideInput
  ): Promise<RateRideInput> {
    return this.service.RatingRideExperience(args);
  }

  @graphql.Query(() => String)
  async RideBooking(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.RideBooking(args);
  }

  @graphql.Query(() => String)
  async RideRating(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.RideRating(args);
  }

  @graphql.Query(() => String)
  async RideUpdate(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.RideUpdate(args);
  }

  @graphql.Query(() => String)
  async UpdateRideBooking(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UpdateRideBooking(args);
  }

  @graphql.Mutation(() => UpdateRideBookingInput)
  async UpdateRideDetails(
    @graphql.Args()
    args: UpdateRideBookingInput
  ): Promise<UpdateRideBookingInput> {
    return this.service.UpdateRideDetails(args);
  }
}
