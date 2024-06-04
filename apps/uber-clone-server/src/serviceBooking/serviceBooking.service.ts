import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServiceBookingServiceBase } from "./base/serviceBooking.service.base";

@Injectable()
export class ServiceBookingService extends ServiceBookingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
