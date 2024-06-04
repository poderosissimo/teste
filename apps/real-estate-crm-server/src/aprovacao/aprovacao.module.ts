import { Module } from "@nestjs/common";
import { AprovacaoModuleBase } from "./base/aprovacao.module.base";
import { AprovacaoService } from "./aprovacao.service";
import { AprovacaoController } from "./aprovacao.controller";
import { AprovacaoResolver } from "./aprovacao.resolver";

@Module({
  imports: [AprovacaoModuleBase],
  controllers: [AprovacaoController],
  providers: [AprovacaoService, AprovacaoResolver],
  exports: [AprovacaoService],
})
export class AprovacaoModule {}
