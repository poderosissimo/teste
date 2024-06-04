import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContatoServiceBase } from "./base/contato.service.base";

@Injectable()
export class ContatoService extends ContatoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
