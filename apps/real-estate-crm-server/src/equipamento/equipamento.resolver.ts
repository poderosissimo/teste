import * as graphql from "@nestjs/graphql";
import { EquipamentoResolverBase } from "./base/equipamento.resolver.base";
import { Equipamento } from "./base/Equipamento";
import { EquipamentoService } from "./equipamento.service";

@graphql.Resolver(() => Equipamento)
export class EquipamentoResolver extends EquipamentoResolverBase {
  constructor(protected readonly service: EquipamentoService) {
    super(service);
  }
}
