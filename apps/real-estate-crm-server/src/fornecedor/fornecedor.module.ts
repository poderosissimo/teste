import { Module } from "@nestjs/common";
import { FornecedorModuleBase } from "./base/fornecedor.module.base";
import { FornecedorService } from "./fornecedor.service";
import { FornecedorController } from "./fornecedor.controller";
import { FornecedorResolver } from "./fornecedor.resolver";

@Module({
  imports: [FornecedorModuleBase],
  controllers: [FornecedorController],
  providers: [FornecedorService, FornecedorResolver],
  exports: [FornecedorService],
})
export class FornecedorModule {}
