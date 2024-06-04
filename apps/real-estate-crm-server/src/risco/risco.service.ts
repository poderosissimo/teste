import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RiscoServiceBase } from "./base/risco.service.base";

@Injectable()
export class RiscoService extends RiscoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
