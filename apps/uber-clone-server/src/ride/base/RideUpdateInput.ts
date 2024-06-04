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
import { DriverWhereUniqueInput } from "../../driver/base/DriverWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsDate,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { PaymentUpdateManyWithoutRidesInput } from "./PaymentUpdateManyWithoutRidesInput";
import { RiderWhereUniqueInput } from "../../rider/base/RiderWhereUniqueInput";
import { EnumRideStatus } from "./EnumRideStatus";

@InputType()
class RideUpdateInput {
  @ApiProperty({
    required: false,
    type: () => DriverWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DriverWhereUniqueInput)
  @IsOptional()
  @Field(() => DriverWhereUniqueInput, {
    nullable: true,
  })
  driver?: DriverWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  dropoffLocation?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endTime?: Date | null;

  @ApiProperty({
    required: false,
    type: () => PaymentUpdateManyWithoutRidesInput,
  })
  @ValidateNested()
  @Type(() => PaymentUpdateManyWithoutRidesInput)
  @IsOptional()
  @Field(() => PaymentUpdateManyWithoutRidesInput, {
    nullable: true,
  })
  payments?: PaymentUpdateManyWithoutRidesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  pickupLocation?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  requestTime?: Date | null;

  @ApiProperty({
    required: false,
    type: () => RiderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RiderWhereUniqueInput)
  @IsOptional()
  @Field(() => RiderWhereUniqueInput, {
    nullable: true,
  })
  rider?: RiderWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startTime?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumRideStatus,
  })
  @IsEnum(EnumRideStatus)
  @IsOptional()
  @Field(() => EnumRideStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { RideUpdateInput as RideUpdateInput };
