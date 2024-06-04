/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Usuario as PrismaUsuario } from "@prisma/client";

export class UsuarioServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.UsuarioCountArgs, "select">): Promise<number> {
    return this.prisma.usuario.count(args);
  }

  async usuarios<T extends Prisma.UsuarioFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsuarioFindManyArgs>
  ): Promise<PrismaUsuario[]> {
    return this.prisma.usuario.findMany<Prisma.UsuarioFindManyArgs>(args);
  }
  async usuario<T extends Prisma.UsuarioFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsuarioFindUniqueArgs>
  ): Promise<PrismaUsuario | null> {
    return this.prisma.usuario.findUnique(args);
  }
  async createUsuario<T extends Prisma.UsuarioCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsuarioCreateArgs>
  ): Promise<PrismaUsuario> {
    return this.prisma.usuario.create<T>(args);
  }
  async updateUsuario<T extends Prisma.UsuarioUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsuarioUpdateArgs>
  ): Promise<PrismaUsuario> {
    return this.prisma.usuario.update<T>(args);
  }
  async deleteUsuario<T extends Prisma.UsuarioDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsuarioDeleteArgs>
  ): Promise<PrismaUsuario> {
    return this.prisma.usuario.delete(args);
  }
}