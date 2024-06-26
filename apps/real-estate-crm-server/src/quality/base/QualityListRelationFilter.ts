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
import { QualityWhereInput } from "./QualityWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class QualityListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => QualityWhereInput,
  })
  @ValidateNested()
  @Type(() => QualityWhereInput)
  @IsOptional()
  @Field(() => QualityWhereInput, {
    nullable: true,
  })
  every?: QualityWhereInput;

  @ApiProperty({
    required: false,
    type: () => QualityWhereInput,
  })
  @ValidateNested()
  @Type(() => QualityWhereInput)
  @IsOptional()
  @Field(() => QualityWhereInput, {
    nullable: true,
  })
  some?: QualityWhereInput;

  @ApiProperty({
    required: false,
    type: () => QualityWhereInput,
  })
  @ValidateNested()
  @Type(() => QualityWhereInput)
  @IsOptional()
  @Field(() => QualityWhereInput, {
    nullable: true,
  })
  none?: QualityWhereInput;
}
export { QualityListRelationFilter as QualityListRelationFilter };
