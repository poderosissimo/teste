import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DocumentoServiceBase } from "./base/documento.service.base";

@Injectable()
export class DocumentoService extends DocumentoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
