import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AprovacaoServiceBase } from "./base/aprovacao.service.base";

@Injectable()
export class AprovacaoService extends AprovacaoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
