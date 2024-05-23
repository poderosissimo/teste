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
  User as PrismaUser,
  Feed as PrismaFeed,
  Friend as PrismaFriend,
  Like as PrismaLike,
  Notification as PrismaNotification,
} from "@prisma/client";

export class UserServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.UserCountArgs, "select">): Promise<number> {
    return this.prisma.user.count(args);
  }

  async users<T extends Prisma.UserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>
  ): Promise<PrismaUser[]> {
    return this.prisma.user.findMany<Prisma.UserFindManyArgs>(args);
  }
  async user<T extends Prisma.UserFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>
  ): Promise<PrismaUser | null> {
    return this.prisma.user.findUnique(args);
  }
  async createUser<T extends Prisma.UserCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserCreateArgs>
  ): Promise<PrismaUser> {
    return this.prisma.user.create<T>(args);
  }
  async updateUser<T extends Prisma.UserUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserUpdateArgs>
  ): Promise<PrismaUser> {
    return this.prisma.user.update<T>(args);
  }
  async deleteUser<T extends Prisma.UserDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserDeleteArgs>
  ): Promise<PrismaUser> {
    return this.prisma.user.delete(args);
  }

  async findFeeds(
    parentId: string,
    args: Prisma.FeedFindManyArgs
  ): Promise<PrismaFeed[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .feeds(args);
  }

  async findFriends(
    parentId: string,
    args: Prisma.FriendFindManyArgs
  ): Promise<PrismaFriend[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .friends(args);
  }

  async findLikes(
    parentId: string,
    args: Prisma.LikeFindManyArgs
  ): Promise<PrismaLike[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .likes(args);
  }

  async findNotifications(
    parentId: string,
    args: Prisma.NotificationFindManyArgs
  ): Promise<PrismaNotification[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .notifications(args);
  }
}