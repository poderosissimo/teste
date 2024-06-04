import { Module } from "@nestjs/common";
import { RideModule } from "./ride/ride.module";
import { PaymentModule } from "./payment/payment.module";
import { DriverModule } from "./driver/driver.module";
import { RiderModule } from "./rider/rider.module";
import { UserModule } from "./user/user.module";
import { ServiceBookingModule } from "./serviceBooking/serviceBooking.module";
import { ProviderModule } from "./provider/provider.module";
import { NotificationModule } from "./notification/notification.module";
import { ServiceModule } from "./service/service.module";
import { SupportTicketModule } from "./supportTicket/supportTicket.module";
import { ReviewModule } from "./review/review.module";
import { NotificationModuleModule } from "./NotificationModule/notificationmodule.module";
import { PaymentModuleModule } from "./PaymentModule/paymentmodule.module";
import { ProviderModuleModule } from "./ProviderModule/providermodule.module";
import { ReviewModuleModule } from "./ReviewModule/reviewmodule.module";
import { ServiceBookingModuleModule } from "./ServiceBookingModule/servicebookingmodule.module";
import { ServiceModuleModule } from "./ServiceModule/servicemodule.module";
import { SupportTicketModuleModule } from "./SupportTicketModule/supportticketmodule.module";
import { UserModuleModule } from "./UserModule/usermodule.module";
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
    RideModule,
    PaymentModule,
    DriverModule,
    RiderModule,
    UserModule,
    ServiceBookingModule,
    ProviderModule,
    NotificationModule,
    ServiceModule,
    SupportTicketModule,
    ReviewModule,
    NotificationModuleModule,
    PaymentModuleModule,
    ProviderModuleModule,
    ReviewModuleModule,
    ServiceBookingModuleModule,
    ServiceModuleModule,
    SupportTicketModuleModule,
    UserModuleModule,
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
