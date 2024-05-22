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
import { RelatorioService } from "../relatorio.service";
import { RelatorioCreateInput } from "./RelatorioCreateInput";
import { Relatorio } from "./Relatorio";
import { RelatorioFindManyArgs } from "./RelatorioFindManyArgs";
import { RelatorioWhereUniqueInput } from "./RelatorioWhereUniqueInput";
import { RelatorioUpdateInput } from "./RelatorioUpdateInput";

export class RelatorioControllerBase {
  constructor(protected readonly service: RelatorioService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Relatorio })
  async createRelatorio(
    @common.Body() data: RelatorioCreateInput
  ): Promise<Relatorio> {
    return await this.service.createRelatorio({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Relatorio] })
  @ApiNestedQuery(RelatorioFindManyArgs)
  async relatorios(@common.Req() request: Request): Promise<Relatorio[]> {
    const args = plainToClass(RelatorioFindManyArgs, request.query);
    return this.service.relatorios({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Relatorio })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async relatorio(
    @common.Param() params: RelatorioWhereUniqueInput
  ): Promise<Relatorio | null> {
    const result = await this.service.relatorio({
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
  @swagger.ApiOkResponse({ type: Relatorio })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRelatorio(
    @common.Param() params: RelatorioWhereUniqueInput,
    @common.Body() data: RelatorioUpdateInput
  ): Promise<Relatorio | null> {
    try {
      return await this.service.updateRelatorio({
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
  @swagger.ApiOkResponse({ type: Relatorio })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRelatorio(
    @common.Param() params: RelatorioWhereUniqueInput
  ): Promise<Relatorio | null> {
    try {
      return await this.service.deleteRelatorio({
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
