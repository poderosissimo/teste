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
import { LeadCadastroService } from "../leadCadastro.service";
import { LeadCadastroCreateInput } from "./LeadCadastroCreateInput";
import { LeadCadastro } from "./LeadCadastro";
import { LeadCadastroFindManyArgs } from "./LeadCadastroFindManyArgs";
import { LeadCadastroWhereUniqueInput } from "./LeadCadastroWhereUniqueInput";
import { LeadCadastroUpdateInput } from "./LeadCadastroUpdateInput";

export class LeadCadastroControllerBase {
  constructor(protected readonly service: LeadCadastroService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LeadCadastro })
  async createLeadCadastro(
    @common.Body() data: LeadCadastroCreateInput
  ): Promise<LeadCadastro> {
    return await this.service.createLeadCadastro({
      data: data,
      select: {
        contato: true,
        createdAt: true,
        dataCriacao: true,
        email: true,
        empresa: true,
        fonteDoLead: true,
        id: true,
        nome: true,
        responsavel: true,
        statusDoLead: true,
        ultimaAtualizacao: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [LeadCadastro] })
  @ApiNestedQuery(LeadCadastroFindManyArgs)
  async leadCadastros(@common.Req() request: Request): Promise<LeadCadastro[]> {
    const args = plainToClass(LeadCadastroFindManyArgs, request.query);
    return this.service.leadCadastros({
      ...args,
      select: {
        contato: true,
        createdAt: true,
        dataCriacao: true,
        email: true,
        empresa: true,
        fonteDoLead: true,
        id: true,
        nome: true,
        responsavel: true,
        statusDoLead: true,
        ultimaAtualizacao: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LeadCadastro })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async leadCadastro(
    @common.Param() params: LeadCadastroWhereUniqueInput
  ): Promise<LeadCadastro | null> {
    const result = await this.service.leadCadastro({
      where: params,
      select: {
        contato: true,
        createdAt: true,
        dataCriacao: true,
        email: true,
        empresa: true,
        fonteDoLead: true,
        id: true,
        nome: true,
        responsavel: true,
        statusDoLead: true,
        ultimaAtualizacao: true,
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
  @swagger.ApiOkResponse({ type: LeadCadastro })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLeadCadastro(
    @common.Param() params: LeadCadastroWhereUniqueInput,
    @common.Body() data: LeadCadastroUpdateInput
  ): Promise<LeadCadastro | null> {
    try {
      return await this.service.updateLeadCadastro({
        where: params,
        data: data,
        select: {
          contato: true,
          createdAt: true,
          dataCriacao: true,
          email: true,
          empresa: true,
          fonteDoLead: true,
          id: true,
          nome: true,
          responsavel: true,
          statusDoLead: true,
          ultimaAtualizacao: true,
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
  @swagger.ApiOkResponse({ type: LeadCadastro })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLeadCadastro(
    @common.Param() params: LeadCadastroWhereUniqueInput
  ): Promise<LeadCadastro | null> {
    try {
      return await this.service.deleteLeadCadastro({
        where: params,
        select: {
          contato: true,
          createdAt: true,
          dataCriacao: true,
          email: true,
          empresa: true,
          fonteDoLead: true,
          id: true,
          nome: true,
          responsavel: true,
          statusDoLead: true,
          ultimaAtualizacao: true,
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
