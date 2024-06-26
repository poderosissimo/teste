/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Approval as PrismaApproval } from "@prisma/client";

export class ApprovalServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ApprovalCountArgs, "select">): Promise<number> {
    return this.prisma.approval.count(args);
  }

  async approvals<T extends Prisma.ApprovalFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApprovalFindManyArgs>
  ): Promise<PrismaApproval[]> {
    return this.prisma.approval.findMany<Prisma.ApprovalFindManyArgs>(args);
  }
  async approval<T extends Prisma.ApprovalFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApprovalFindUniqueArgs>
  ): Promise<PrismaApproval | null> {
    return this.prisma.approval.findUnique(args);
  }
  async createApproval<T extends Prisma.ApprovalCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApprovalCreateArgs>
  ): Promise<PrismaApproval> {
    return this.prisma.approval.create<T>(args);
  }
  async updateApproval<T extends Prisma.ApprovalUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApprovalUpdateArgs>
  ): Promise<PrismaApproval> {
    return this.prisma.approval.update<T>(args);
  }
  async deleteApproval<T extends Prisma.ApprovalDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApprovalDeleteArgs>
  ): Promise<PrismaApproval> {
    return this.prisma.approval.delete(args);
  }
}
