/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Manutencao as PrismaManutencao } from "@prisma/client";

export class ManutencaoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ManutencaoCountArgs, "select">
  ): Promise<number> {
    return this.prisma.manutencao.count(args);
  }

  async manutencaos<T extends Prisma.ManutencaoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ManutencaoFindManyArgs>
  ): Promise<PrismaManutencao[]> {
    return this.prisma.manutencao.findMany<Prisma.ManutencaoFindManyArgs>(args);
  }
  async manutencao<T extends Prisma.ManutencaoFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ManutencaoFindUniqueArgs>
  ): Promise<PrismaManutencao | null> {
    return this.prisma.manutencao.findUnique(args);
  }
  async createManutencao<T extends Prisma.ManutencaoCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ManutencaoCreateArgs>
  ): Promise<PrismaManutencao> {
    return this.prisma.manutencao.create<T>(args);
  }
  async updateManutencao<T extends Prisma.ManutencaoUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ManutencaoUpdateArgs>
  ): Promise<PrismaManutencao> {
    return this.prisma.manutencao.update<T>(args);
  }
  async deleteManutencao<T extends Prisma.ManutencaoDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ManutencaoDeleteArgs>
  ): Promise<PrismaManutencao> {
    return this.prisma.manutencao.delete(args);
  }
}
