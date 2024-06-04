import { Module } from "@nestjs/common";
import { ContratoModuleBase } from "./base/contrato.module.base";
import { ContratoService } from "./contrato.service";
import { ContratoController } from "./contrato.controller";
import { ContratoResolver } from "./contrato.resolver";

@Module({
  imports: [ContratoModuleBase],
  controllers: [ContratoController],
  providers: [ContratoService, ContratoResolver],
  exports: [ContratoService],
})
export class ContratoModule {}
