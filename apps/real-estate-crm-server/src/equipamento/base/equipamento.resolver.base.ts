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
import { Equipamento } from "./Equipamento";
import { EquipamentoCountArgs } from "./EquipamentoCountArgs";
import { EquipamentoFindManyArgs } from "./EquipamentoFindManyArgs";
import { EquipamentoFindUniqueArgs } from "./EquipamentoFindUniqueArgs";
import { DeleteEquipamentoArgs } from "./DeleteEquipamentoArgs";
import { EquipamentoService } from "../equipamento.service";
@graphql.Resolver(() => Equipamento)
export class EquipamentoResolverBase {
  constructor(protected readonly service: EquipamentoService) {}

  async _equipamentosMeta(
    @graphql.Args() args: EquipamentoCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Equipamento])
  async equipamentos(
    @graphql.Args() args: EquipamentoFindManyArgs
  ): Promise<Equipamento[]> {
    return this.service.equipamentos(args);
  }

  @graphql.Query(() => Equipamento, { nullable: true })
  async equipamento(
    @graphql.Args() args: EquipamentoFindUniqueArgs
  ): Promise<Equipamento | null> {
    const result = await this.service.equipamento(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Equipamento)
  async deleteEquipamento(
    @graphql.Args() args: DeleteEquipamentoArgs
  ): Promise<Equipamento | null> {
    try {
      return await this.service.deleteEquipamento(args);
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