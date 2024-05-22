import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LeadCadastroServiceBase } from "./base/leadCadastro.service.base";

@Injectable()
export class LeadCadastroService extends LeadCadastroServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
