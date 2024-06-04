import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TarefaServiceBase } from "./base/tarefa.service.base";

@Injectable()
export class TarefaService extends TarefaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
