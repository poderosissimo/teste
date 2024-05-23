import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserLocationService } from "./userLocation.service";
import { UserLocationControllerBase } from "./base/userLocation.controller.base";

@swagger.ApiTags("userLocations")
@common.Controller("userLocations")
export class UserLocationController extends UserLocationControllerBase {
  constructor(protected readonly service: UserLocationService) {
    super(service);
  }
}
