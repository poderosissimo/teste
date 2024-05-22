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
import { DocumentoService } from "../documento.service";
import { DocumentoCreateInput } from "./DocumentoCreateInput";
import { Documento } from "./Documento";
import { DocumentoFindManyArgs } from "./DocumentoFindManyArgs";
import { DocumentoWhereUniqueInput } from "./DocumentoWhereUniqueInput";
import { DocumentoUpdateInput } from "./DocumentoUpdateInput";

export class DocumentoControllerBase {
  constructor(protected readonly service: DocumentoService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Documento })
  async createDocumento(
    @common.Body() data: DocumentoCreateInput
  ): Promise<Documento> {
    return await this.service.createDocumento({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Documento] })
  @ApiNestedQuery(DocumentoFindManyArgs)
  async documentos(@common.Req() request: Request): Promise<Documento[]> {
    const args = plainToClass(DocumentoFindManyArgs, request.query);
    return this.service.documentos({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Documento })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async documento(
    @common.Param() params: DocumentoWhereUniqueInput
  ): Promise<Documento | null> {
    const result = await this.service.documento({
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
  @swagger.ApiOkResponse({ type: Documento })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDocumento(
    @common.Param() params: DocumentoWhereUniqueInput,
    @common.Body() data: DocumentoUpdateInput
  ): Promise<Documento | null> {
    try {
      return await this.service.updateDocumento({
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
  @swagger.ApiOkResponse({ type: Documento })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDocumento(
    @common.Param() params: DocumentoWhereUniqueInput
  ): Promise<Documento | null> {
    try {
      return await this.service.deleteDocumento({
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
