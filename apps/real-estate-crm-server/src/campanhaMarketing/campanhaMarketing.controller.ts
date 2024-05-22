import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CampanhaMarketingService } from "./campanhaMarketing.service";
import { CampanhaMarketingControllerBase } from "./base/campanhaMarketing.controller.base";

@swagger.ApiTags("campanhaMarketings")
@common.Controller("campanhaMarketings")
export class CampanhaMarketingController extends CampanhaMarketingControllerBase {
  constructor(protected readonly service: CampanhaMarketingService) {
    super(service);
  }
}
