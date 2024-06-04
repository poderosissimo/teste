import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InovacaoServiceBase } from "./base/inovacao.service.base";

@Injectable()
export class InovacaoService extends InovacaoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
