/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Quality } from "./Quality";
import { QualityCountArgs } from "./QualityCountArgs";
import { QualityFindManyArgs } from "./QualityFindManyArgs";
import { QualityFindUniqueArgs } from "./QualityFindUniqueArgs";
import { DeleteQualityArgs } from "./DeleteQualityArgs";
import { QualityService } from "../quality.service";
@graphql.Resolver(() => Quality)
export class QualityResolverBase {
  constructor(protected readonly service: QualityService) {}

  async _qualitiesMeta(
    @graphql.Args() args: QualityCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Quality])
  async qualities(
    @graphql.Args() args: QualityFindManyArgs
  ): Promise<Quality[]> {
    return this.service.qualities(args);
  }

  @graphql.Query(() => Quality, { nullable: true })
  async quality(
    @graphql.Args() args: QualityFindUniqueArgs
  ): Promise<Quality | null> {
    const result = await this.service.quality(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Quality)
  async deleteQuality(
    @graphql.Args() args: DeleteQualityArgs
  ): Promise<Quality | null> {
    try {
      return await this.service.deleteQuality(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
