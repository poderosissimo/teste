import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CampanhaMarketingServiceBase } from "./base/campanhaMarketing.service.base";

@Injectable()
export class CampanhaMarketingService extends CampanhaMarketingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
