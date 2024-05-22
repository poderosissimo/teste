import { Injectable } from "@nestjs/common";
import { BookRideInput } from "../serviceBookingModule/BookRideInput";
import { RateRideInput } from "../serviceBookingModule/RateRideInput";
import { UpdateRideBookingInput } from "../serviceBookingModule/UpdateRideBookingInput";

@Injectable()
export class ServiceBookingModuleService {
  constructor() {}
  async BookRide(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CancelRide(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetRideStatus(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async NewRideBooking(args: BookRideInput): Promise<BookRideInput> {
    throw new Error("Not implemented");
  }
  async RateRide(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async RatingRideExperience(args: RateRideInput): Promise<RateRideInput> {
    throw new Error("Not implemented");
  }
  async RideBooking(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async RideRating(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async RideUpdate(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UpdateRideBooking(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UpdateRideDetails(args: UpdateRideBookingInput): Promise<UpdateRideBookingInput> {
    throw new Error("Not implemented");
  }
}
