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
import { UserLocationWhereInput } from "./UserLocationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserLocationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserLocationWhereInput,
  })
  @ValidateNested()
  @Type(() => UserLocationWhereInput)
  @IsOptional()
  @Field(() => UserLocationWhereInput, {
    nullable: true,
  })
  every?: UserLocationWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserLocationWhereInput,
  })
  @ValidateNested()
  @Type(() => UserLocationWhereInput)
  @IsOptional()
  @Field(() => UserLocationWhereInput, {
    nullable: true,
  })
  some?: UserLocationWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserLocationWhereInput,
  })
  @ValidateNested()
  @Type(() => UserLocationWhereInput)
  @IsOptional()
  @Field(() => UserLocationWhereInput, {
    nullable: true,
  })
  none?: UserLocationWhereInput;
}
export { UserLocationListRelationFilter as UserLocationListRelationFilter };
