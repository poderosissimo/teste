import * as graphql from "@nestjs/graphql";
import { ServiceModuleService } from "./servicemodule.service";

export class ServiceModuleResolver {
  constructor(protected readonly service: ServiceModuleService) {}
}
