import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContratoServiceBase } from "./base/contrato.service.base";

@Injectable()
export class ContratoService extends ContratoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
