import * as graphql from "@nestjs/graphql";
import { ProviderModuleService } from "./providermodule.service";

export class ProviderModuleResolver {
  constructor(protected readonly service: ProviderModuleService) {}
}
