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
  IsDate,
  IsOptional,
  IsNumber,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumLeadStatus } from "./EnumLeadStatus";

@InputType()
class LeadCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dateCaptured?: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  potentialValue?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  source?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumLeadStatus,
  })
  @IsEnum(EnumLeadStatus)
  @IsOptional()
  @Field(() => EnumLeadStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { LeadCreateInput as LeadCreateInput };