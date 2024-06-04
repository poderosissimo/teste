import { Module } from "@nestjs/common";
import { LeadCadastroModuleBase } from "./base/leadCadastro.module.base";
import { LeadCadastroService } from "./leadCadastro.service";
import { LeadCadastroController } from "./leadCadastro.controller";
import { LeadCadastroResolver } from "./leadCadastro.resolver";

@Module({
  imports: [LeadCadastroModuleBase],
  controllers: [LeadCadastroController],
  providers: [LeadCadastroService, LeadCadastroResolver],
  exports: [LeadCadastroService],
})
export class LeadCadastroModule {}
