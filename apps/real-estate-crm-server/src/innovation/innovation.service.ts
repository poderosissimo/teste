import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InnovationServiceBase } from "./base/innovation.service.base";

@Injectable()
export class InnovationService extends InnovationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
