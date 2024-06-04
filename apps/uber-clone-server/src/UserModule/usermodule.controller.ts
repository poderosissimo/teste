import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserModuleService } from "./usermodule.service";

@swagger.ApiTags("userModules")
@common.Controller("userModules")
export class UserModuleController {
  constructor(protected readonly service: UserModuleService) {}

  @common.Post("/send-confirmation")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ConfirmationSend(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ConfirmationSend(body);
      }

  @common.Post("/verify")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async IdentityVerify(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.IdentityVerify(body);
      }

  @common.Put("/profile")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ProfileUpdate(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ProfileUpdate(body);
      }

  @common.Get("/:id/register-user")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RegisterUser(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.RegisterUser(body);
      }

  @common.Get("/:id/send-confirmation")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SendConfirmation(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SendConfirmation(body);
      }

  @common.Get("/:id/update-profile")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateProfile(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.UpdateProfile(body);
      }

  @common.Post("/register")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UserRegister(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.UserRegister(body);
      }

  @common.Get("/:id/verify-identity")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async VerifyIdentity(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.VerifyIdentity(body);
      }
}
