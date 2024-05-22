import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FornecedorService } from "./fornecedor.service";
import { FornecedorControllerBase } from "./base/fornecedor.controller.base";

@swagger.ApiTags("fornecedors")
@common.Controller("fornecedors")
export class FornecedorController extends FornecedorControllerBase {
  constructor(protected readonly service: FornecedorService) {
    super(service);
  }
}
