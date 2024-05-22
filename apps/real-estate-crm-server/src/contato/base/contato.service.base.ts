/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Contato as PrismaContato } from "@prisma/client";

export class ContatoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ContatoCountArgs, "select">): Promise<number> {
    return this.prisma.contato.count(args);
  }

  async contatoes<T extends Prisma.ContatoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContatoFindManyArgs>
  ): Promise<PrismaContato[]> {
    return this.prisma.contato.findMany<Prisma.ContatoFindManyArgs>(args);
  }
  async contato<T extends Prisma.ContatoFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContatoFindUniqueArgs>
  ): Promise<PrismaContato | null> {
    return this.prisma.contato.findUnique(args);
  }
  async createContato<T extends Prisma.ContatoCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContatoCreateArgs>
  ): Promise<PrismaContato> {
    return this.prisma.contato.create<T>(args);
  }
  async updateContato<T extends Prisma.ContatoUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContatoUpdateArgs>
  ): Promise<PrismaContato> {
    return this.prisma.contato.update<T>(args);
  }
  async deleteContato<T extends Prisma.ContatoDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContatoDeleteArgs>
  ): Promise<PrismaContato> {
    return this.prisma.contato.delete(args);
  }
}