import * as graphql from "@nestjs/graphql";
import { PaymentModuleService } from "./paymentmodule.service";

export class PaymentModuleResolver {
  constructor(protected readonly service: PaymentModuleService) {}
}
