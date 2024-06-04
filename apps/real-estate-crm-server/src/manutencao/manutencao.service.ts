import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ManutencaoServiceBase } from "./base/manutencao.service.base";

@Injectable()
export class ManutencaoService extends ManutencaoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
