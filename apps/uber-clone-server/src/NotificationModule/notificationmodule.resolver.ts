import * as graphql from "@nestjs/graphql";
import { NotificationModuleService } from "./notificationmodule.service";

export class NotificationModuleResolver {
  constructor(protected readonly service: NotificationModuleService) {}
}
