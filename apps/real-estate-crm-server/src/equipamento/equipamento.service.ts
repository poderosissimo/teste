import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EquipamentoServiceBase } from "./base/equipamento.service.base";

@Injectable()
export class EquipamentoService extends EquipamentoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
