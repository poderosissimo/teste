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
import { FollowingWhereInput } from "./FollowingWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FollowingListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FollowingWhereInput,
  })
  @ValidateNested()
  @Type(() => FollowingWhereInput)
  @IsOptional()
  @Field(() => FollowingWhereInput, {
    nullable: true,
  })
  every?: FollowingWhereInput;

  @ApiProperty({
    required: false,
    type: () => FollowingWhereInput,
  })
  @ValidateNested()
  @Type(() => FollowingWhereInput)
  @IsOptional()
  @Field(() => FollowingWhereInput, {
    nullable: true,
  })
  some?: FollowingWhereInput;

  @ApiProperty({
    required: false,
    type: () => FollowingWhereInput,
  })
  @ValidateNested()
  @Type(() => FollowingWhereInput)
  @IsOptional()
  @Field(() => FollowingWhereInput, {
    nullable: true,
  })
  none?: FollowingWhereInput;
}
export { FollowingListRelationFilter as FollowingListRelationFilter };
