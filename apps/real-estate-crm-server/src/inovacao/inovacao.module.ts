import { Module } from "@nestjs/common";
import { InovacaoModuleBase } from "./base/inovacao.module.base";
import { InovacaoService } from "./inovacao.service";
import { InovacaoController } from "./inovacao.controller";
import { InovacaoResolver } from "./inovacao.resolver";

@Module({
  imports: [InovacaoModuleBase],
  controllers: [InovacaoController],
  providers: [InovacaoService, InovacaoResolver],
  exports: [InovacaoService],
})
export class InovacaoModule {}
