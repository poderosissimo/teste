/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FornecedorService } from "../fornecedor.service";
import { FornecedorCreateInput } from "./FornecedorCreateInput";
import { Fornecedor } from "./Fornecedor";
import { FornecedorFindManyArgs } from "./FornecedorFindManyArgs";
import { FornecedorWhereUniqueInput } from "./FornecedorWhereUniqueInput";
import { FornecedorUpdateInput } from "./FornecedorUpdateInput";

export class FornecedorControllerBase {
  constructor(protected readonly service: FornecedorService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Fornecedor })
  async createFornecedor(
    @common.Body() data: FornecedorCreateInput
  ): Promise<Fornecedor> {
    return await this.service.createFornecedor({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Fornecedor] })
  @ApiNestedQuery(FornecedorFindManyArgs)
  async fornecedors(@common.Req() request: Request): Promise<Fornecedor[]> {
    const args = plainToClass(FornecedorFindManyArgs, request.query);
    return this.service.fornecedors({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Fornecedor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async fornecedor(
    @common.Param() params: FornecedorWhereUniqueInput
  ): Promise<Fornecedor | null> {
    const result = await this.service.fornecedor({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Fornecedor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFornecedor(
    @common.Param() params: FornecedorWhereUniqueInput,
    @common.Body() data: FornecedorUpdateInput
  ): Promise<Fornecedor | null> {
    try {
      return await this.service.updateFornecedor({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Fornecedor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFornecedor(
    @common.Param() params: FornecedorWhereUniqueInput
  ): Promise<Fornecedor | null> {
    try {
      return await this.service.deleteFornecedor({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
