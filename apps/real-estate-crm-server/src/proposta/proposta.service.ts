import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PropostaServiceBase } from "./base/proposta.service.base";

@Injectable()
export class PropostaService extends PropostaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
