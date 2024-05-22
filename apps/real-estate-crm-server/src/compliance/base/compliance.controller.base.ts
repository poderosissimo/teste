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
import { ComplianceService } from "../compliance.service";
import { ComplianceCreateInput } from "./ComplianceCreateInput";
import { Compliance } from "./Compliance";
import { ComplianceFindManyArgs } from "./ComplianceFindManyArgs";
import { ComplianceWhereUniqueInput } from "./ComplianceWhereUniqueInput";
import { ComplianceUpdateInput } from "./ComplianceUpdateInput";

export class ComplianceControllerBase {
  constructor(protected readonly service: ComplianceService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Compliance })
  async createCompliance(
    @common.Body() data: ComplianceCreateInput
  ): Promise<Compliance> {
    return await this.service.createCompliance({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Compliance] })
  @ApiNestedQuery(ComplianceFindManyArgs)
  async compliances(@common.Req() request: Request): Promise<Compliance[]> {
    const args = plainToClass(ComplianceFindManyArgs, request.query);
    return this.service.compliances({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Compliance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async compliance(
    @common.Param() params: ComplianceWhereUniqueInput
  ): Promise<Compliance | null> {
    const result = await this.service.compliance({
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
  @swagger.ApiOkResponse({ type: Compliance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCompliance(
    @common.Param() params: ComplianceWhereUniqueInput,
    @common.Body() data: ComplianceUpdateInput
  ): Promise<Compliance | null> {
    try {
      return await this.service.updateCompliance({
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
  @swagger.ApiOkResponse({ type: Compliance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCompliance(
    @common.Param() params: ComplianceWhereUniqueInput
  ): Promise<Compliance | null> {
    try {
      return await this.service.deleteCompliance({
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