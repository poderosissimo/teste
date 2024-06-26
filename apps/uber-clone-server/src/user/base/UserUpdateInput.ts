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
import { IsString, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";
import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { ReviewUpdateManyWithoutUsersInput } from "./ReviewUpdateManyWithoutUsersInput";
import { EnumUserRoles } from "./EnumUserRoles";
import { ServiceBookingUpdateManyWithoutUsersInput } from "./ServiceBookingUpdateManyWithoutUsersInput";
import { SupportTicketUpdateManyWithoutUsersInput } from "./SupportTicketUpdateManyWithoutUsersInput";

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

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
    type: () => NotificationUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => NotificationUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => NotificationUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  notifications?: NotificationUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phoneNumber?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  profilePicture?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => ReviewUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ReviewUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ReviewUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  reviews?: ReviewUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    enum: EnumUserRoles,
    isArray: true,
  })
  @IsEnum(EnumUserRoles, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumUserRoles], {
    nullable: true,
  })
  roles?: Array<"Option1">;

  @ApiProperty({
    required: false,
    type: () => ServiceBookingUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ServiceBookingUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ServiceBookingUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  serviceBookings?: ServiceBookingUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => SupportTicketUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => SupportTicketUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => SupportTicketUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  supportTickets?: SupportTicketUpdateManyWithoutUsersInput;
}

export { UserUpdateInput as UserUpdateInput };
