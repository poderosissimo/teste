/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsOptional,
  IsString,
  IsDate,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumContractValidationStatus } from "./EnumContractValidationStatus";

@InputType()
class ContractCreateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  approvalRequired?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  approvedBy?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  renewalAlertDate?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumContractValidationStatus,
  })
  @IsEnum(EnumContractValidationStatus)
  @IsOptional()
  @Field(() => EnumContractValidationStatus, {
    nullable: true,
  })
  validationStatus?: "Option1" | null;
}

export { ContractCreateInput as ContractCreateInput };
