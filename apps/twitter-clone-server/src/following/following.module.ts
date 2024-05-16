import { Module } from "@nestjs/common";
import { FollowingModuleBase } from "./base/following.module.base";
import { FollowingService } from "./following.service";
import { FollowingController } from "./following.controller";
import { FollowingResolver } from "./following.resolver";

@Module({
  imports: [FollowingModuleBase],
  controllers: [FollowingController],
  providers: [FollowingService, FollowingResolver],
  exports: [FollowingService],
})
export class FollowingModule {}
