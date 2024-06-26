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
import { MaintenanceWhereInput } from "./MaintenanceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MaintenanceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MaintenanceWhereInput,
  })
  @ValidateNested()
  @Type(() => MaintenanceWhereInput)
  @IsOptional()
  @Field(() => MaintenanceWhereInput, {
    nullable: true,
  })
  every?: MaintenanceWhereInput;

  @ApiProperty({
    required: false,
    type: () => MaintenanceWhereInput,
  })
  @ValidateNested()
  @Type(() => MaintenanceWhereInput)
  @IsOptional()
  @Field(() => MaintenanceWhereInput, {
    nullable: true,
  })
  some?: MaintenanceWhereInput;

  @ApiProperty({
    required: false,
    type: () => MaintenanceWhereInput,
  })
  @ValidateNested()
  @Type(() => MaintenanceWhereInput)
  @IsOptional()
  @Field(() => MaintenanceWhereInput, {
    nullable: true,
  })
  none?: MaintenanceWhereInput;
}
export { MaintenanceListRelationFilter as MaintenanceListRelationFilter };
