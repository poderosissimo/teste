import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IdeiaServiceBase } from "./base/ideia.service.base";

@Injectable()
export class IdeiaService extends IdeiaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
