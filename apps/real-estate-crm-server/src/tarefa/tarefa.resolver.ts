import * as graphql from "@nestjs/graphql";
import { TarefaResolverBase } from "./base/tarefa.resolver.base";
import { Tarefa } from "./base/Tarefa";
import { TarefaService } from "./tarefa.service";

@graphql.Resolver(() => Tarefa)
export class TarefaResolver extends TarefaResolverBase {
  constructor(protected readonly service: TarefaService) {
    super(service);
  }
}
