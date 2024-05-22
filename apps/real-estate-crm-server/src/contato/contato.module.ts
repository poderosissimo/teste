import { Module } from "@nestjs/common";
import { ContatoModuleBase } from "./base/contato.module.base";
import { ContatoService } from "./contato.service";
import { ContatoController } from "./contato.controller";
import { ContatoResolver } from "./contato.resolver";

@Module({
  imports: [ContatoModuleBase],
  controllers: [ContatoController],
  providers: [ContatoService, ContatoResolver],
  exports: [ContatoService],
})
export class ContatoModule {}
