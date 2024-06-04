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
import { EnumServiceAvailabilityStatus } from "./EnumServiceAvailabilityStatus";
import { IsEnum, IsOptional, IsString, IsNumber } from "class-validator";

@InputType()
class ServiceUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumServiceAvailabilityStatus,
  })
  @IsEnum(EnumServiceAvailabilityStatus)
  @IsOptional()
  @Field(() => EnumServiceAvailabilityStatus, {
    nullable: true,
  })
  availabilityStatus?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;
}

export { ServiceUpdateInput as ServiceUpdateInput };