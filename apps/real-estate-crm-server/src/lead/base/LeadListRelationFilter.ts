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
import { LeadWhereInput } from "./LeadWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LeadListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LeadWhereInput,
  })
  @ValidateNested()
  @Type(() => LeadWhereInput)
  @IsOptional()
  @Field(() => LeadWhereInput, {
    nullable: true,
  })
  every?: LeadWhereInput;

  @ApiProperty({
    required: false,
    type: () => LeadWhereInput,
  })
  @ValidateNested()
  @Type(() => LeadWhereInput)
  @IsOptional()
  @Field(() => LeadWhereInput, {
    nullable: true,
  })
  some?: LeadWhereInput;

  @ApiProperty({
    required: false,
    type: () => LeadWhereInput,
  })
  @ValidateNested()
  @Type(() => LeadWhereInput)
  @IsOptional()
  @Field(() => LeadWhereInput, {
    nullable: true,
  })
  none?: LeadWhereInput;
}
export { LeadListRelationFilter as LeadListRelationFilter };
