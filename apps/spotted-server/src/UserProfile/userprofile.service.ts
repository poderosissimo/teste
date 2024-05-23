import { Injectable } from "@nestjs/common";
import { UserDto } from "../getNearbyUsers/UserDto";

@Injectable()
export class UserProfileService {
  constructor() {}
  async UpdateUserProfile(args: UserDto): Promise<UserDto> {
    throw new Error("Not implemented");
  }
}
