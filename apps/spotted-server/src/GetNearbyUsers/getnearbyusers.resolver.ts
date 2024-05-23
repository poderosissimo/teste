import * as graphql from "@nestjs/graphql";
import { GeoCoordinatesInput } from "../getNearbyUsers/GeoCoordinatesInput";
import { UserDto } from "../getNearbyUsers/UserDto";
import { GetNearbyUsersService } from "./getnearbyusers.service";

export class GetNearbyUsersResolver {
  constructor(protected readonly service: GetNearbyUsersService) {}

  @graphql.Query(() => String)
  async FindNearbyUsers(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.FindNearbyUsers(args);
  }

  @graphql.Query(() => String)
  async GetNearbyUsers(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetNearbyUsers(args);
  }

  @graphql.Query(() => [UserDto])
  async GetNearbyUsersV2(
    @graphql.Args()
    args: GeoCoordinatesInput
  ): Promise<UserDto[]> {
    return this.service.GetNearbyUsersV2(args);
  }
}
