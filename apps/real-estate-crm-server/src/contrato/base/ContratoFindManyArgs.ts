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
import { ContratoWhereInput } from "./ContratoWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ContratoOrderByInput } from "./ContratoOrderByInput";

@ArgsType()
class ContratoFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ContratoWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ContratoWhereInput, { nullable: true })
  @Type(() => ContratoWhereInput)
  where?: ContratoWhereInput;

  @ApiProperty({
    required: false,
    type: [ContratoOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ContratoOrderByInput], { nullable: true })
  @Type(() => ContratoOrderByInput)
  orderBy?: Array<ContratoOrderByInput>;

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

export { ContratoFindManyArgs as ContratoFindManyArgs };
