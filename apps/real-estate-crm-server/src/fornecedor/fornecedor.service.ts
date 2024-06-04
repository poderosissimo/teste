import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FornecedorServiceBase } from "./base/fornecedor.service.base";

@Injectable()
export class FornecedorService extends FornecedorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
