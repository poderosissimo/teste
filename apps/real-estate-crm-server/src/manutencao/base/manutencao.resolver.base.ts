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
import { Manutencao } from "./Manutencao";
import { ManutencaoCountArgs } from "./ManutencaoCountArgs";
import { ManutencaoFindManyArgs } from "./ManutencaoFindManyArgs";
import { ManutencaoFindUniqueArgs } from "./ManutencaoFindUniqueArgs";
import { DeleteManutencaoArgs } from "./DeleteManutencaoArgs";
import { ManutencaoService } from "../manutencao.service";
@graphql.Resolver(() => Manutencao)
export class ManutencaoResolverBase {
  constructor(protected readonly service: ManutencaoService) {}

  async _manutencaosMeta(
    @graphql.Args() args: ManutencaoCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Manutencao])
  async manutencaos(
    @graphql.Args() args: ManutencaoFindManyArgs
  ): Promise<Manutencao[]> {
    return this.service.manutencaos(args);
  }

  @graphql.Query(() => Manutencao, { nullable: true })
  async manutencao(
    @graphql.Args() args: ManutencaoFindUniqueArgs
  ): Promise<Manutencao | null> {
    const result = await this.service.manutencao(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Manutencao)
  async deleteManutencao(
    @graphql.Args() args: DeleteManutencaoArgs
  ): Promise<Manutencao | null> {
    try {
      return await this.service.deleteManutencao(args);
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
