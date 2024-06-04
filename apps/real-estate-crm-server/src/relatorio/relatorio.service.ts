import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RelatorioServiceBase } from "./base/relatorio.service.base";

@Injectable()
export class RelatorioService extends RelatorioServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
