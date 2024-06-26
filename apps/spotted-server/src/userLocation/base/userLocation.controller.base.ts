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
import { UserLocationService } from "../userLocation.service";
import { UserLocationCreateInput } from "./UserLocationCreateInput";
import { UserLocation } from "./UserLocation";
import { Post } from "../../post/base/Post";
import { UserLocationFindManyArgs } from "./UserLocationFindManyArgs";
import { UserLocationWhereUniqueInput } from "./UserLocationWhereUniqueInput";
import { UserLocationUpdateInput } from "./UserLocationUpdateInput";

export class UserLocationControllerBase {
  constructor(protected readonly service: UserLocationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserLocation })
  async createUserLocation(
    @common.Body() data: UserLocationCreateInput
  ): Promise<UserLocation> {
    return await this.service.createUserLocation({
      data: data,
      select: {
        createdAt: true,
        id: true,
        latitude: true,
        longitude: true,
        updatedAt: true,
        userId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [UserLocation] })
  @ApiNestedQuery(UserLocationFindManyArgs)
  async userLocations(@common.Req() request: Request): Promise<UserLocation[]> {
    const args = plainToClass(UserLocationFindManyArgs, request.query);
    return this.service.userLocations({
      ...args,
      select: {
        createdAt: true,
        id: true,
        latitude: true,
        longitude: true,
        updatedAt: true,
        userId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserLocation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async userLocation(
    @common.Param() params: UserLocationWhereUniqueInput
  ): Promise<UserLocation | null> {
    const result = await this.service.userLocation({
      where: params,
      select: {
        createdAt: true,
        id: true,
        latitude: true,
        longitude: true,
        updatedAt: true,
        userId: true,
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
  @swagger.ApiOkResponse({ type: UserLocation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUserLocation(
    @common.Param() params: UserLocationWhereUniqueInput,
    @common.Body() data: UserLocationUpdateInput
  ): Promise<UserLocation | null> {
    try {
      return await this.service.updateUserLocation({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          latitude: true,
          longitude: true,
          updatedAt: true,
          userId: true,
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
  @swagger.ApiOkResponse({ type: UserLocation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUserLocation(
    @common.Param() params: UserLocationWhereUniqueInput
  ): Promise<UserLocation | null> {
    try {
      return await this.service.deleteUserLocation({
        where: params,
        select: {
          createdAt: true,
          id: true,
          latitude: true,
          longitude: true,
          updatedAt: true,
          userId: true,
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
}
