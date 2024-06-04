/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ServiceBookingService } from "../serviceBooking.service";
import { ServiceBookingCreateInput } from "./ServiceBookingCreateInput";
import { ServiceBooking } from "./ServiceBooking";
import { ServiceBookingFindManyArgs } from "./ServiceBookingFindManyArgs";
import { ServiceBookingWhereUniqueInput } from "./ServiceBookingWhereUniqueInput";
import { ServiceBookingUpdateInput } from "./ServiceBookingUpdateInput";
import { ReviewFindManyArgs } from "../../review/base/ReviewFindManyArgs";
import { Review } from "../../review/base/Review";
import { ReviewWhereUniqueInput } from "../../review/base/ReviewWhereUniqueInput";

export class ServiceBookingControllerBase {
  constructor(protected readonly service: ServiceBookingService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ServiceBooking })
  async createServiceBooking(
    @common.Body() data: ServiceBookingCreateInput
  ): Promise<ServiceBooking> {
    return await this.service.createServiceBooking({
      data: {
        ...data,

        provider: data.provider
          ? {
              connect: data.provider,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        endTime: true,
        id: true,

        provider: {
          select: {
            id: true,
          },
        },

        requestTime: true,
        serviceType: true,
        startTime: true,
        status: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ServiceBooking] })
  @ApiNestedQuery(ServiceBookingFindManyArgs)
  async serviceBookings(
    @common.Req() request: Request
  ): Promise<ServiceBooking[]> {
    const args = plainToClass(ServiceBookingFindManyArgs, request.query);
    return this.service.serviceBookings({
      ...args,
      select: {
        createdAt: true,
        endTime: true,
        id: true,

        provider: {
          select: {
            id: true,
          },
        },

        requestTime: true,
        serviceType: true,
        startTime: true,
        status: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ServiceBooking })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async serviceBooking(
    @common.Param() params: ServiceBookingWhereUniqueInput
  ): Promise<ServiceBooking | null> {
    const result = await this.service.serviceBooking({
      where: params,
      select: {
        createdAt: true,
        endTime: true,
        id: true,

        provider: {
          select: {
            id: true,
          },
        },

        requestTime: true,
        serviceType: true,
        startTime: true,
        status: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ServiceBooking })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateServiceBooking(
    @common.Param() params: ServiceBookingWhereUniqueInput,
    @common.Body() data: ServiceBookingUpdateInput
  ): Promise<ServiceBooking | null> {
    try {
      return await this.service.updateServiceBooking({
        where: params,
        data: {
          ...data,

          provider: data.provider
            ? {
                connect: data.provider,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          endTime: true,
          id: true,

          provider: {
            select: {
              id: true,
            },
          },

          requestTime: true,
          serviceType: true,
          startTime: true,
          status: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ServiceBooking })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteServiceBooking(
    @common.Param() params: ServiceBookingWhereUniqueInput
  ): Promise<ServiceBooking | null> {
    try {
      return await this.service.deleteServiceBooking({
        where: params,
        select: {
          createdAt: true,
          endTime: true,
          id: true,

          provider: {
            select: {
              id: true,
            },
          },

          requestTime: true,
          serviceType: true,
          startTime: true,
          status: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/reviews")
  @ApiNestedQuery(ReviewFindManyArgs)
  async findReviews(
    @common.Req() request: Request,
    @common.Param() params: ServiceBookingWhereUniqueInput
  ): Promise<Review[]> {
    const query = plainToClass(ReviewFindManyArgs, request.query);
    const results = await this.service.findReviews(params.id, {
      ...query,
      select: {
        comment: true,
        createdAt: true,
        id: true,

        provider: {
          select: {
            id: true,
          },
        },

        rating: true,

        serviceBooking: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/reviews")
  async connectReviews(
    @common.Param() params: ServiceBookingWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviews: {
        connect: body,
      },
    };
    await this.service.updateServiceBooking({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/reviews")
  async updateReviews(
    @common.Param() params: ServiceBookingWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviews: {
        set: body,
      },
    };
    await this.service.updateServiceBooking({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/reviews")
  async disconnectReviews(
    @common.Param() params: ServiceBookingWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviews: {
        disconnect: body,
      },
    };
    await this.service.updateServiceBooking({
      where: params,
      data,
      select: { id: true },
    });
  }
}