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
import { FollowingWhereInput } from "./FollowingWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FollowingOrderByInput } from "./FollowingOrderByInput";

@ArgsType()
class FollowingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FollowingWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FollowingWhereInput, { nullable: true })
  @Type(() => FollowingWhereInput)
  where?: FollowingWhereInput;

  @ApiProperty({
    required: false,
    type: [FollowingOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FollowingOrderByInput], { nullable: true })
  @Type(() => FollowingOrderByInput)
  orderBy?: Array<FollowingOrderByInput>;

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

export { FollowingFindManyArgs as FollowingFindManyArgs };
