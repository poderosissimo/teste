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
import { ComplianceWhereInput } from "./ComplianceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ComplianceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ComplianceWhereInput,
  })
  @ValidateNested()
  @Type(() => ComplianceWhereInput)
  @IsOptional()
  @Field(() => ComplianceWhereInput, {
    nullable: true,
  })
  every?: ComplianceWhereInput;

  @ApiProperty({
    required: false,
    type: () => ComplianceWhereInput,
  })
  @ValidateNested()
  @Type(() => ComplianceWhereInput)
  @IsOptional()
  @Field(() => ComplianceWhereInput, {
    nullable: true,
  })
  some?: ComplianceWhereInput;

  @ApiProperty({
    required: false,
    type: () => ComplianceWhereInput,
  })
  @ValidateNested()
  @Type(() => ComplianceWhereInput)
  @IsOptional()
  @Field(() => ComplianceWhereInput, {
    nullable: true,
  })
  none?: ComplianceWhereInput;
}
export { ComplianceListRelationFilter as ComplianceListRelationFilter };