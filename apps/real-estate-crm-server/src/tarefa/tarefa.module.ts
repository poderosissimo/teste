import { Module } from "@nestjs/common";
import { TarefaModuleBase } from "./base/tarefa.module.base";
import { TarefaService } from "./tarefa.service";
import { TarefaController } from "./tarefa.controller";
import { TarefaResolver } from "./tarefa.resolver";

@Module({
  imports: [TarefaModuleBase],
  controllers: [TarefaController],
  providers: [TarefaService, TarefaResolver],
  exports: [TarefaService],
})
export class TarefaModule {}
