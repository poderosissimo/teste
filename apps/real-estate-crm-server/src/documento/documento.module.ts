import { Module } from "@nestjs/common";
import { DocumentoModuleBase } from "./base/documento.module.base";
import { DocumentoService } from "./documento.service";
import { DocumentoController } from "./documento.controller";
import { DocumentoResolver } from "./documento.resolver";

@Module({
  imports: [DocumentoModuleBase],
  controllers: [DocumentoController],
  providers: [DocumentoService, DocumentoResolver],
  exports: [DocumentoService],
})
export class DocumentoModule {}
