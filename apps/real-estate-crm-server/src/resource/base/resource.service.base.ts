/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Resource as PrismaResource } from "@prisma/client";

export class ResourceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ResourceCountArgs, "select">): Promise<number> {
    return this.prisma.resource.count(args);
  }

  async resources<T extends Prisma.ResourceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ResourceFindManyArgs>
  ): Promise<PrismaResource[]> {
    return this.prisma.resource.findMany<Prisma.ResourceFindManyArgs>(args);
  }
  async resource<T extends Prisma.ResourceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ResourceFindUniqueArgs>
  ): Promise<PrismaResource | null> {
    return this.prisma.resource.findUnique(args);
  }
  async createResource<T extends Prisma.ResourceCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ResourceCreateArgs>
  ): Promise<PrismaResource> {
    return this.prisma.resource.create<T>(args);
  }
  async updateResource<T extends Prisma.ResourceUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ResourceUpdateArgs>
  ): Promise<PrismaResource> {
    return this.prisma.resource.update<T>(args);
  }
  async deleteResource<T extends Prisma.ResourceDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ResourceDeleteArgs>
  ): Promise<PrismaResource> {
    return this.prisma.resource.delete(args);
  }
}
