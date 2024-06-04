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
import { Risk } from "./Risk";
import { RiskCountArgs } from "./RiskCountArgs";
import { RiskFindManyArgs } from "./RiskFindManyArgs";
import { RiskFindUniqueArgs } from "./RiskFindUniqueArgs";
import { DeleteRiskArgs } from "./DeleteRiskArgs";
import { RiskService } from "../risk.service";
@graphql.Resolver(() => Risk)
export class RiskResolverBase {
  constructor(protected readonly service: RiskService) {}

  async _risksMeta(
    @graphql.Args() args: RiskCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Risk])
  async risks(@graphql.Args() args: RiskFindManyArgs): Promise<Risk[]> {
    return this.service.risks(args);
  }

  @graphql.Query(() => Risk, { nullable: true })
  async risk(@graphql.Args() args: RiskFindUniqueArgs): Promise<Risk | null> {
    const result = await this.service.risk(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Risk)
  async deleteRisk(@graphql.Args() args: DeleteRiskArgs): Promise<Risk | null> {
    try {
      return await this.service.deleteRisk(args);
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