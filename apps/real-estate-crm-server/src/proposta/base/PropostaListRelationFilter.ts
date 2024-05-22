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
import { PropostaWhereInput } from "./PropostaWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PropostaListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PropostaWhereInput,
  })
  @ValidateNested()
  @Type(() => PropostaWhereInput)
  @IsOptional()
  @Field(() => PropostaWhereInput, {
    nullable: true,
  })
  every?: PropostaWhereInput;

  @ApiProperty({
    required: false,
    type: () => PropostaWhereInput,
  })
  @ValidateNested()
  @Type(() => PropostaWhereInput)
  @IsOptional()
  @Field(() => PropostaWhereInput, {
    nullable: true,
  })
  some?: PropostaWhereInput;

  @ApiProperty({
    required: false,
    type: () => PropostaWhereInput,
  })
  @ValidateNested()
  @Type(() => PropostaWhereInput)
  @IsOptional()
  @Field(() => PropostaWhereInput, {
    nullable: true,
  })
  none?: PropostaWhereInput;
}
export { PropostaListRelationFilter as PropostaListRelationFilter };