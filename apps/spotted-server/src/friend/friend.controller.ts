import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FriendService } from "./friend.service";
import { FriendControllerBase } from "./base/friend.controller.base";

@swagger.ApiTags("friends")
@common.Controller("friends")
export class FriendController extends FriendControllerBase {
  constructor(protected readonly service: FriendService) {
    super(service);
  }
}
