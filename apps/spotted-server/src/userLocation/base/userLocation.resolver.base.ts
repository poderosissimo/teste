/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { UserLocation } from "./UserLocation";
import { UserLocationCountArgs } from "./UserLocationCountArgs";
import { UserLocationFindManyArgs } from "./UserLocationFindManyArgs";
import { UserLocationFindUniqueArgs } from "./UserLocationFindUniqueArgs";
import { CreateUserLocationArgs } from "./CreateUserLocationArgs";
import { UpdateUserLocationArgs } from "./UpdateUserLocationArgs";
import { DeleteUserLocationArgs } from "./DeleteUserLocationArgs";
import { UserLocationService } from "../userLocation.service";
@graphql.Resolver(() => UserLocation)
export class UserLocationResolverBase {
  constructor(protected readonly service: UserLocationService) {}

  async _userLocationsMeta(
    @graphql.Args() args: UserLocationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [UserLocation])
  async userLocations(
    @graphql.Args() args: UserLocationFindManyArgs
  ): Promise<UserLocation[]> {
    return this.service.userLocations(args);
  }

  @graphql.Query(() => UserLocation, { nullable: true })
  async userLocation(
    @graphql.Args() args: UserLocationFindUniqueArgs
  ): Promise<UserLocation | null> {
    const result = await this.service.userLocation(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => UserLocation)
  async createUserLocation(
    @graphql.Args() args: CreateUserLocationArgs
  ): Promise<UserLocation> {
    return await this.service.createUserLocation({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => UserLocation)
  async updateUserLocation(
    @graphql.Args() args: UpdateUserLocationArgs
  ): Promise<UserLocation | null> {
    try {
      return await this.service.updateUserLocation({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => UserLocation)
  async deleteUserLocation(
    @graphql.Args() args: DeleteUserLocationArgs
  ): Promise<UserLocation | null> {
    try {
      return await this.service.deleteUserLocation(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}