/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Risco as PrismaRisco } from "@prisma/client";

export class RiscoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.RiscoCountArgs, "select">): Promise<number> {
    return this.prisma.risco.count(args);
  }

  async riscos<T extends Prisma.RiscoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RiscoFindManyArgs>
  ): Promise<PrismaRisco[]> {
    return this.prisma.risco.findMany<Prisma.RiscoFindManyArgs>(args);
  }
  async risco<T extends Prisma.RiscoFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RiscoFindUniqueArgs>
  ): Promise<PrismaRisco | null> {
    return this.prisma.risco.findUnique(args);
  }
  async createRisco<T extends Prisma.RiscoCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RiscoCreateArgs>
  ): Promise<PrismaRisco> {
    return this.prisma.risco.create<T>(args);
  }
  async updateRisco<T extends Prisma.RiscoUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RiscoUpdateArgs>
  ): Promise<PrismaRisco> {
    return this.prisma.risco.update<T>(args);
  }
  async deleteRisco<T extends Prisma.RiscoDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RiscoDeleteArgs>
  ): Promise<PrismaRisco> {
    return this.prisma.risco.delete(args);
  }
}