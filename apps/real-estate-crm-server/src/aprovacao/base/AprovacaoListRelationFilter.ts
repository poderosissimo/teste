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
import { AprovacaoWhereInput } from "./AprovacaoWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AprovacaoListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AprovacaoWhereInput,
  })
  @ValidateNested()
  @Type(() => AprovacaoWhereInput)
  @IsOptional()
  @Field(() => AprovacaoWhereInput, {
    nullable: true,
  })
  every?: AprovacaoWhereInput;

  @ApiProperty({
    required: false,
    type: () => AprovacaoWhereInput,
  })
  @ValidateNested()
  @Type(() => AprovacaoWhereInput)
  @IsOptional()
  @Field(() => AprovacaoWhereInput, {
    nullable: true,
  })
  some?: AprovacaoWhereInput;

  @ApiProperty({
    required: false,
    type: () => AprovacaoWhereInput,
  })
  @ValidateNested()
  @Type(() => AprovacaoWhereInput)
  @IsOptional()
  @Field(() => AprovacaoWhereInput, {
    nullable: true,
  })
  none?: AprovacaoWhereInput;
}
export { AprovacaoListRelationFilter as AprovacaoListRelationFilter };