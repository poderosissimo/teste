import * as graphql from "@nestjs/graphql";
import { ReviewModuleService } from "./reviewmodule.service";

export class ReviewModuleResolver {
  constructor(protected readonly service: ReviewModuleService) {}
}
