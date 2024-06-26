/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  ServiceBooking as PrismaServiceBooking,
  Review as PrismaReview,
  Provider as PrismaProvider,
  User as PrismaUser,
} from "@prisma/client";

export class ServiceBookingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ServiceBookingCountArgs, "select">
  ): Promise<number> {
    return this.prisma.serviceBooking.count(args);
  }

  async serviceBookings<T extends Prisma.ServiceBookingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ServiceBookingFindManyArgs>
  ): Promise<PrismaServiceBooking[]> {
    return this.prisma.serviceBooking.findMany<Prisma.ServiceBookingFindManyArgs>(
      args
    );
  }
  async serviceBooking<T extends Prisma.ServiceBookingFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ServiceBookingFindUniqueArgs>
  ): Promise<PrismaServiceBooking | null> {
    return this.prisma.serviceBooking.findUnique(args);
  }
  async createServiceBooking<T extends Prisma.ServiceBookingCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ServiceBookingCreateArgs>
  ): Promise<PrismaServiceBooking> {
    return this.prisma.serviceBooking.create<T>(args);
  }
  async updateServiceBooking<T extends Prisma.ServiceBookingUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ServiceBookingUpdateArgs>
  ): Promise<PrismaServiceBooking> {
    return this.prisma.serviceBooking.update<T>(args);
  }
  async deleteServiceBooking<T extends Prisma.ServiceBookingDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ServiceBookingDeleteArgs>
  ): Promise<PrismaServiceBooking> {
    return this.prisma.serviceBooking.delete(args);
  }

  async findReviews(
    parentId: string,
    args: Prisma.ReviewFindManyArgs
  ): Promise<PrismaReview[]> {
    return this.prisma.serviceBooking
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .reviews(args);
  }

  async getProvider(parentId: string): Promise<PrismaProvider | null> {
    return this.prisma.serviceBooking
      .findUnique({
        where: { id: parentId },
      })
      .provider();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.serviceBooking
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
