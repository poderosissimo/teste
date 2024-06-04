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
import { ContatoWhereInput } from "./ContatoWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ContatoListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ContatoWhereInput,
  })
  @ValidateNested()
  @Type(() => ContatoWhereInput)
  @IsOptional()
  @Field(() => ContatoWhereInput, {
    nullable: true,
  })
  every?: ContatoWhereInput;

  @ApiProperty({
    required: false,
    type: () => ContatoWhereInput,
  })
  @ValidateNested()
  @Type(() => ContatoWhereInput)
  @IsOptional()
  @Field(() => ContatoWhereInput, {
    nullable: true,
  })
  some?: ContatoWhereInput;

  @ApiProperty({
    required: false,
    type: () => ContatoWhereInput,
  })
  @ValidateNested()
  @Type(() => ContatoWhereInput)
  @IsOptional()
  @Field(() => ContatoWhereInput, {
    nullable: true,
  })
  none?: ContatoWhereInput;
}
export { ContatoListRelationFilter as ContatoListRelationFilter };