import { Module } from "@nestjs/common";
import { GetNearbyUsersService } from "./getnearbyusers.service";
import { GetNearbyUsersController } from "./getnearbyusers.controller";
import { GetNearbyUsersResolver } from "./getnearbyusers.resolver";

@Module({
  controllers: [GetNearbyUsersController],
  providers: [GetNearbyUsersService, GetNearbyUsersResolver],
  exports: [GetNearbyUsersService],
})
export class GetNearbyUsersModule {}
