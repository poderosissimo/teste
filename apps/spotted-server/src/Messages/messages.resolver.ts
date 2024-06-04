import * as graphql from "@nestjs/graphql";
import { MessageDto } from "../messages/MessageDto";
import { MessagesService } from "./messages.service";

export class MessagesResolver {
  constructor(protected readonly service: MessagesService) {}

  @graphql.Query(() => String)
  async SendMessage(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SendMessage(args);
  }

  @graphql.Mutation(() => MessageDto)
  async SendMessageV2(
    @graphql.Args()
    args: MessageDto
  ): Promise<MessageDto> {
    return this.service.SendMessageV2(args);
  }
}
