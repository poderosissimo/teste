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
import { EquipamentoWhereInput } from "./EquipamentoWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class EquipamentoListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => EquipamentoWhereInput,
  })
  @ValidateNested()
  @Type(() => EquipamentoWhereInput)
  @IsOptional()
  @Field(() => EquipamentoWhereInput, {
    nullable: true,
  })
  every?: EquipamentoWhereInput;

  @ApiProperty({
    required: false,
    type: () => EquipamentoWhereInput,
  })
  @ValidateNested()
  @Type(() => EquipamentoWhereInput)
  @IsOptional()
  @Field(() => EquipamentoWhereInput, {
    nullable: true,
  })
  some?: EquipamentoWhereInput;

  @ApiProperty({
    required: false,
    type: () => EquipamentoWhereInput,
  })
  @ValidateNested()
  @Type(() => EquipamentoWhereInput)
  @IsOptional()
  @Field(() => EquipamentoWhereInput, {
    nullable: true,
  })
  none?: EquipamentoWhereInput;
}
export { EquipamentoListRelationFilter as EquipamentoListRelationFilter };
