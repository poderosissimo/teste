import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ServiceBookingModuleService } from "./servicebookingmodule.service";
import { UpdateRideBookingInput } from "../serviceBookingModule/UpdateRideBookingInput";
import { BookRideInput } from "../serviceBookingModule/BookRideInput";
import { RateRideInput } from "../serviceBookingModule/RateRideInput";

@swagger.ApiTags("serviceBookingModules")
@common.Controller("serviceBookingModules")
export class ServiceBookingModuleController {
  constructor(protected readonly service: ServiceBookingModuleService) {}

  @common.Get("/:id/book-ride")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async BookRide(
    @common.Body()
    body: UpdateRideBookingInput
  ): Promise<string> {
        return this.service.BookRide(body);
      }

  @common.Delete("/cancel-ride")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CancelRide(
    @common.Body()
    body: UpdateRideBookingInput
  ): Promise<string> {
        return this.service.CancelRide(body);
      }

  @common.Get("/ride-status")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetRideStatus(
    @common.Body()
    body: UpdateRideBookingInput
  ): Promise<string> {
        return this.service.GetRideStatus(body);
      }

  @common.Post("/new-ride-booking")
  @swagger.ApiOkResponse({
    type: BookRideInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async NewRideBooking(
    @common.Body()
    body: UpdateRideBookingInput
  ): Promise<BookRideInput> {
        return this.service.NewRideBooking(body);
      }

  @common.Get("/:id/rate-ride")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RateRide(
    @common.Body()
    body: UpdateRideBookingInput
  ): Promise<string> {
        return this.service.RateRide(body);
      }

  @common.Post("/rating-ride-experience")
  @swagger.ApiOkResponse({
    type: RateRideInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RatingRideExperience(
    @common.Body()
    body: UpdateRideBookingInput
  ): Promise<RateRideInput> {
        return this.service.RatingRideExperience(body);
      }

  @common.Get("/:id/ride-booking")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RideBooking(
    @common.Body()
    body: UpdateRideBookingInput
  ): Promise<string> {
        return this.service.RideBooking(body);
      }

  @common.Get("/:id/ride-rating")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RideRating(
    @common.Body()
    body: UpdateRideBookingInput
  ): Promise<string> {
        return this.service.RideRating(body);
      }

  @common.Get("/:id/ride-update")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RideUpdate(
    @common.Body()
    body: UpdateRideBookingInput
  ): Promise<string> {
        return this.service.RideUpdate(body);
      }

  @common.Get("/:id/update-ride-booking")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateRideBooking(
    @common.Body()
    body: UpdateRideBookingInput
  ): Promise<string> {
        return this.service.UpdateRideBooking(body);
      }

  @common.Put("/update-ride-details")
  @swagger.ApiOkResponse({
    type: UpdateRideBookingInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateRideDetails(
    @common.Body()
    body: UpdateRideBookingInput
  ): Promise<UpdateRideBookingInput> {
        return this.service.UpdateRideDetails(body);
      }
}
