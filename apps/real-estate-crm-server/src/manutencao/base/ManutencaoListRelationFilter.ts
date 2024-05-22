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
import { ManutencaoWhereInput } from "./ManutencaoWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ManutencaoListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ManutencaoWhereInput,
  })
  @ValidateNested()
  @Type(() => ManutencaoWhereInput)
  @IsOptional()
  @Field(() => ManutencaoWhereInput, {
    nullable: true,
  })
  every?: ManutencaoWhereInput;

  @ApiProperty({
    required: false,
    type: () => ManutencaoWhereInput,
  })
  @ValidateNested()
  @Type(() => ManutencaoWhereInput)
  @IsOptional()
  @Field(() => ManutencaoWhereInput, {
    nullable: true,
  })
  some?: ManutencaoWhereInput;

  @ApiProperty({
    required: false,
    type: () => ManutencaoWhereInput,
  })
  @ValidateNested()
  @Type(() => ManutencaoWhereInput)
  @IsOptional()
  @Field(() => ManutencaoWhereInput, {
    nullable: true,
  })
  none?: ManutencaoWhereInput;
}
export { ManutencaoListRelationFilter as ManutencaoListRelationFilter };