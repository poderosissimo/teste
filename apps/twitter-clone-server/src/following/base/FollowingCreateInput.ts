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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { FollowingWhereUniqueInput } from "./FollowingWhereUniqueInput";
import { Type } from "class-transformer";
import { FollowingCreateNestedManyWithoutFollowingsInput } from "./FollowingCreateNestedManyWithoutFollowingsInput";

@InputType()
class FollowingCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  follower?: string | null;

  @ApiProperty({
    required: false,
    type: () => FollowingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FollowingWhereUniqueInput)
  @IsOptional()
  @Field(() => FollowingWhereUniqueInput, {
    nullable: true,
  })
  following?: FollowingWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => FollowingCreateNestedManyWithoutFollowingsInput,
  })
  @ValidateNested()
  @Type(() => FollowingCreateNestedManyWithoutFollowingsInput)
  @IsOptional()
  @Field(() => FollowingCreateNestedManyWithoutFollowingsInput, {
    nullable: true,
  })
  followings?: FollowingCreateNestedManyWithoutFollowingsInput;
}

export { FollowingCreateInput as FollowingCreateInput };
