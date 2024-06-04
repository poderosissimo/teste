import { Module } from "@nestjs/common";
import { PropostaModuleBase } from "./base/proposta.module.base";
import { PropostaService } from "./proposta.service";
import { PropostaController } from "./proposta.controller";
import { PropostaResolver } from "./proposta.resolver";

@Module({
  imports: [PropostaModuleBase],
  controllers: [PropostaController],
  providers: [PropostaService, PropostaResolver],
  exports: [PropostaService],
})
export class PropostaModule {}
