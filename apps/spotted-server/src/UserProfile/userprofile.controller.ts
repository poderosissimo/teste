import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserProfileService } from "./userprofile.service";
import { UserDto } from "../getNearbyUsers/UserDto";

@swagger.ApiTags("userProfiles")
@common.Controller("userProfiles")
export class UserProfileController {
  constructor(protected readonly service: UserProfileService) {}

  @common.Put("/user-profile")
  @swagger.ApiOkResponse({
    type: UserDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateUserProfile(
    @common.Body()
    body: UserDto
  ): Promise<UserDto> {
        return this.service.UpdateUserProfile(body);
      }
}
