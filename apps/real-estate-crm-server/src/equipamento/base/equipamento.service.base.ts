/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Equipamento as PrismaEquipamento } from "@prisma/client";

export class EquipamentoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.EquipamentoCountArgs, "select">
  ): Promise<number> {
    return this.prisma.equipamento.count(args);
  }

  async equipamentos<T extends Prisma.EquipamentoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EquipamentoFindManyArgs>
  ): Promise<PrismaEquipamento[]> {
    return this.prisma.equipamento.findMany<Prisma.EquipamentoFindManyArgs>(
      args
    );
  }
  async equipamento<T extends Prisma.EquipamentoFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.EquipamentoFindUniqueArgs>
  ): Promise<PrismaEquipamento | null> {
    return this.prisma.equipamento.findUnique(args);
  }
  async createEquipamento<T extends Prisma.EquipamentoCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EquipamentoCreateArgs>
  ): Promise<PrismaEquipamento> {
    return this.prisma.equipamento.create<T>(args);
  }
  async updateEquipamento<T extends Prisma.EquipamentoUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EquipamentoUpdateArgs>
  ): Promise<PrismaEquipamento> {
    return this.prisma.equipamento.update<T>(args);
  }
  async deleteEquipamento<T extends Prisma.EquipamentoDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.EquipamentoDeleteArgs>
  ): Promise<PrismaEquipamento> {
    return this.prisma.equipamento.delete(args);
  }
}
