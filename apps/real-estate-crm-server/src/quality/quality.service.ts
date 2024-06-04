import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QualityServiceBase } from "./base/quality.service.base";

@Injectable()
export class QualityService extends QualityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
