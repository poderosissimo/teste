import { Module } from "@nestjs/common";
import { RelatorioModuleBase } from "./base/relatorio.module.base";
import { RelatorioService } from "./relatorio.service";
import { RelatorioController } from "./relatorio.controller";
import { RelatorioResolver } from "./relatorio.resolver";

@Module({
  imports: [RelatorioModuleBase],
  controllers: [RelatorioController],
  providers: [RelatorioService, RelatorioResolver],
  exports: [RelatorioService],
})
export class RelatorioModule {}
