import { Module } from "@nestjs/common";
import { EquipamentoModuleBase } from "./base/equipamento.module.base";
import { EquipamentoService } from "./equipamento.service";
import { EquipamentoController } from "./equipamento.controller";
import { EquipamentoResolver } from "./equipamento.resolver";

@Module({
  imports: [EquipamentoModuleBase],
  controllers: [EquipamentoController],
  providers: [EquipamentoService, EquipamentoResolver],
  exports: [EquipamentoService],
})
export class EquipamentoModule {}
