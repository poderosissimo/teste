import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PaymentModuleService } from "./paymentmodule.service";

@swagger.ApiTags("paymentModules")
@common.Controller("paymentModules")
export class PaymentModuleController {
  constructor(protected readonly service: PaymentModuleService) {}
}
