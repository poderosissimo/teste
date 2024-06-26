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
import { FriendWhereUniqueInput } from "./FriendWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { FriendListRelationFilter } from "./FriendListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class FriendWhereInput {
  @ApiProperty({
    required: false,
    type: () => FriendWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FriendWhereUniqueInput)
  @IsOptional()
  @Field(() => FriendWhereUniqueInput, {
    nullable: true,
  })
  friend?: FriendWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => FriendListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FriendListRelationFilter)
  @IsOptional()
  @Field(() => FriendListRelationFilter, {
    nullable: true,
  })
  friends?: FriendListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;
}

export { FriendWhereInput as FriendWhereInput };
