import { Module } from "@nestjs/common";
import { ProjetoModuleBase } from "./base/projeto.module.base";
import { ProjetoService } from "./projeto.service";
import { ProjetoController } from "./projeto.controller";
import { ProjetoResolver } from "./projeto.resolver";

@Module({
  imports: [ProjetoModuleBase],
  controllers: [ProjetoController],
  providers: [ProjetoService, ProjetoResolver],
  exports: [ProjetoService],
})
export class ProjetoModule {}
