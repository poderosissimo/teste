import { Module } from "@nestjs/common";
import { PaymentModuleService } from "./paymentmodule.service";
import { PaymentModuleController } from "./paymentmodule.controller";
import { PaymentModuleResolver } from "./paymentmodule.resolver";

@Module({
  controllers: [PaymentModuleController],
  providers: [PaymentModuleService, PaymentModuleResolver],
  exports: [PaymentModuleService],
})
export class PaymentModuleModule {}
