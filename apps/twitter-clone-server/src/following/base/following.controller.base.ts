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
import { FollowingService } from "../following.service";
import { FollowingCreateInput } from "./FollowingCreateInput";
import { Following } from "./Following";
import { FollowingFindManyArgs } from "./FollowingFindManyArgs";
import { FollowingWhereUniqueInput } from "./FollowingWhereUniqueInput";
import { FollowingUpdateInput } from "./FollowingUpdateInput";

export class FollowingControllerBase {
  constructor(protected readonly service: FollowingService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Following })
  async createFollowing(
    @common.Body() data: FollowingCreateInput
  ): Promise<Following> {
    return await this.service.createFollowing({
      data: {
        ...data,

        following: data.following
          ? {
              connect: data.following,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        follower: true,

        following: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Following] })
  @ApiNestedQuery(FollowingFindManyArgs)
  async followings(@common.Req() request: Request): Promise<Following[]> {
    const args = plainToClass(FollowingFindManyArgs, request.query);
    return this.service.followings({
      ...args,
      select: {
        createdAt: true,
        follower: true,

        following: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Following })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async following(
    @common.Param() params: FollowingWhereUniqueInput
  ): Promise<Following | null> {
    const result = await this.service.following({
      where: params,
      select: {
        createdAt: true,
        follower: true,

        following: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Following })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFollowing(
    @common.Param() params: FollowingWhereUniqueInput,
    @common.Body() data: FollowingUpdateInput
  ): Promise<Following | null> {
    try {
      return await this.service.updateFollowing({
        where: params,
        data: {
          ...data,

          following: data.following
            ? {
                connect: data.following,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          follower: true,

          following: {
            select: {
              id: true,
            },
          },

          id: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Following })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFollowing(
    @common.Param() params: FollowingWhereUniqueInput
  ): Promise<Following | null> {
    try {
      return await this.service.deleteFollowing({
        where: params,
        select: {
          createdAt: true,
          follower: true,

          following: {
            select: {
              id: true,
            },
          },

          id: true,
          updatedAt: true,
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

  @common.Get("/:id/followings")
  @ApiNestedQuery(FollowingFindManyArgs)
  async findFollowings(
    @common.Req() request: Request,
    @common.Param() params: FollowingWhereUniqueInput
  ): Promise<Following[]> {
    const query = plainToClass(FollowingFindManyArgs, request.query);
    const results = await this.service.findFollowings(params.id, {
      ...query,
      select: {
        createdAt: true,
        follower: true,

        following: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/followings")
  async connectFollowings(
    @common.Param() params: FollowingWhereUniqueInput,
    @common.Body() body: FollowingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      followings: {
        connect: body,
      },
    };
    await this.service.updateFollowing({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/followings")
  async updateFollowings(
    @common.Param() params: FollowingWhereUniqueInput,
    @common.Body() body: FollowingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      followings: {
        set: body,
      },
    };
    await this.service.updateFollowing({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/followings")
  async disconnectFollowings(
    @common.Param() params: FollowingWhereUniqueInput,
    @common.Body() body: FollowingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      followings: {
        disconnect: body,
      },
    };
    await this.service.updateFollowing({
      where: params,
      data,
      select: { id: true },
    });
  }
}
