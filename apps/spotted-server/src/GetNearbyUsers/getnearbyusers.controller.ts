import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { GetNearbyUsersService } from "./getnearbyusers.service";
import { GeoCoordinatesInput } from "../getNearbyUsers/GeoCoordinatesInput";
import { UserDto } from "../getNearbyUsers/UserDto";

@swagger.ApiTags("getNearbyUsers")
@common.Controller("getNearbyUsers")
export class GetNearbyUsersController {
  constructor(protected readonly service: GetNearbyUsersService) {}

  @common.Get("/:id/find-nearby-users")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FindNearbyUsers(
    @common.Body()
    body: GeoCoordinatesInput
  ): Promise<string> {
        return this.service.FindNearbyUsers(body);
      }

  @common.Get("/:id/get-nearby-users")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetNearbyUsers(
    @common.Body()
    body: GeoCoordinatesInput
  ): Promise<string> {
        return this.service.GetNearbyUsers(body);
      }

  @common.Get("/nearby-users-v2")
  @swagger.ApiOkResponse({
    type: UserDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetNearbyUsersV2(
    @common.Body()
    body: GeoCoordinatesInput
  ): Promise<UserDto[]> {
        return this.service.GetNearbyUsersV2(body);
      }
}
