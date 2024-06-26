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
import { Compliance } from "./Compliance";
import { ComplianceCountArgs } from "./ComplianceCountArgs";
import { ComplianceFindManyArgs } from "./ComplianceFindManyArgs";
import { ComplianceFindUniqueArgs } from "./ComplianceFindUniqueArgs";
import { DeleteComplianceArgs } from "./DeleteComplianceArgs";
import { ComplianceService } from "../compliance.service";
@graphql.Resolver(() => Compliance)
export class ComplianceResolverBase {
  constructor(protected readonly service: ComplianceService) {}

  async _compliancesMeta(
    @graphql.Args() args: ComplianceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Compliance])
  async compliances(
    @graphql.Args() args: ComplianceFindManyArgs
  ): Promise<Compliance[]> {
    return this.service.compliances(args);
  }

  @graphql.Query(() => Compliance, { nullable: true })
  async compliance(
    @graphql.Args() args: ComplianceFindUniqueArgs
  ): Promise<Compliance | null> {
    const result = await this.service.compliance(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Compliance)
  async deleteCompliance(
    @graphql.Args() args: DeleteComplianceArgs
  ): Promise<Compliance | null> {
    try {
      return await this.service.deleteCompliance(args);
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
