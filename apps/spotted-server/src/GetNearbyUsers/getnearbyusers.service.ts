import { Injectable } from "@nestjs/common";
import { GeoCoordinatesInput } from "../getNearbyUsers/GeoCoordinatesInput";
import { UserDto } from "../getNearbyUsers/UserDto";

@Injectable()
export class GetNearbyUsersService {
  constructor() {}
  async FindNearbyUsers(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetNearbyUsers(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetNearbyUsersV2(args: GeoCoordinatesInput): Promise<UserDto[]> {
    throw new Error("Not implemented");
  }
}
