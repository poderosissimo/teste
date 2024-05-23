import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { MessagesService } from "./messages.service";
import { MessageDto } from "../messages/MessageDto";

@swagger.ApiTags("messages")
@common.Controller("messages")
export class MessagesController {
  constructor(protected readonly service: MessagesService) {}

  @common.Get("/:id/send-message")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SendMessage(
    @common.Body()
    body: MessageDto
  ): Promise<string> {
        return this.service.SendMessage(body);
      }

  @common.Post("/messages/sendv2")
  @swagger.ApiOkResponse({
    type: MessageDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SendMessageV2(
    @common.Body()
    body: MessageDto
  ): Promise<MessageDto> {
        return this.service.SendMessageV2(body);
      }
}
