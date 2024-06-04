import { Injectable } from "@nestjs/common";
import { MessageDto } from "../messages/MessageDto";

@Injectable()
export class MessagesService {
  constructor() {}
  async SendMessage(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async SendMessageV2(args: MessageDto): Promise<MessageDto> {
    throw new Error("Not implemented");
  }
}
