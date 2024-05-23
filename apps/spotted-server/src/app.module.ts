import { Module } from "@nestjs/common";
import { PostModule } from "./post/post.module";
import { UserModule } from "./user/user.module";
import { CommentModule } from "./comment/comment.module";
import { ChatModule } from "./chat/chat.module";
import { FeedModule } from "./feed/feed.module";
import { LocationModule } from "./location/location.module";
import { FriendModule } from "./friend/friend.module";
import { NotificationModule } from "./notification/notification.module";
import { LikeModule } from "./like/like.module";
import { FriendRequestModule } from "./friendRequest/friendRequest.module";
import { UserLocationModule } from "./userLocation/userLocation.module";
import { ChatMessageModule } from "./chatMessage/chatMessage.module";
import { FollowModule } from "./follow/follow.module";
import { GetNearbyUsersModule } from "./GetNearbyUsers/getnearbyusers.module";
import { MessagesModule } from "./Messages/messages.module";
import { UserProfileModule } from "./UserProfile/userprofile.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    PostModule,
    UserModule,
    CommentModule,
    ChatModule,
    FeedModule,
    LocationModule,
    FriendModule,
    NotificationModule,
    LikeModule,
    FriendRequestModule,
    UserLocationModule,
    ChatMessageModule,
    FollowModule,
    GetNearbyUsersModule,
    MessagesModule,
    UserProfileModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
