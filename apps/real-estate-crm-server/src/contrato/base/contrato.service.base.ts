/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Contrato as PrismaContrato } from "@prisma/client";

export class ContratoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ContratoCountArgs, "select">): Promise<number> {
    return this.prisma.contrato.count(args);
  }

  async contratoes<T extends Prisma.ContratoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContratoFindManyArgs>
  ): Promise<PrismaContrato[]> {
    return this.prisma.contrato.findMany<Prisma.ContratoFindManyArgs>(args);
  }
  async contrato<T extends Prisma.ContratoFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContratoFindUniqueArgs>
  ): Promise<PrismaContrato | null> {
    return this.prisma.contrato.findUnique(args);
  }
  async createContrato<T extends Prisma.ContratoCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContratoCreateArgs>
  ): Promise<PrismaContrato> {
    return this.prisma.contrato.create<T>(args);
  }
  async updateContrato<T extends Prisma.ContratoUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContratoUpdateArgs>
  ): Promise<PrismaContrato> {
    return this.prisma.contrato.update<T>(args);
  }
  async deleteContrato<T extends Prisma.ContratoDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContratoDeleteArgs>
  ): Promise<PrismaContrato> {
    return this.prisma.contrato.delete(args);
  }
}
