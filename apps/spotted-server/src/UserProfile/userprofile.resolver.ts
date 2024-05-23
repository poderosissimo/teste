import * as graphql from "@nestjs/graphql";
import { UserDto } from "../getNearbyUsers/UserDto";
import { UserProfileService } from "./userprofile.service";

export class UserProfileResolver {
  constructor(protected readonly service: UserProfileService) {}

  @graphql.Mutation(() => UserDto)
  async UpdateUserProfile(
    @graphql.Args()
    args: UserDto
  ): Promise<UserDto> {
    return this.service.UpdateUserProfile(args);
  }
}
