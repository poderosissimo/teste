/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RiscoWhereInput } from "./RiscoWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RiscoOrderByInput } from "./RiscoOrderByInput";

@ArgsType()
class RiscoFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RiscoWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RiscoWhereInput, { nullable: true })
  @Type(() => RiscoWhereInput)
  where?: RiscoWhereInput;

  @ApiProperty({
    required: false,
    type: [RiscoOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RiscoOrderByInput], { nullable: true })
  @Type(() => RiscoOrderByInput)
  orderBy?: Array<RiscoOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { RiscoFindManyArgs as RiscoFindManyArgs };