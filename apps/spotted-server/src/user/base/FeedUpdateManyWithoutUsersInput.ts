/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { FeedWhereUniqueInput } from "../../feed/base/FeedWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class FeedUpdateManyWithoutUsersInput {
  @Field(() => [FeedWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FeedWhereUniqueInput],
  })
  connect?: Array<FeedWhereUniqueInput>;

  @Field(() => [FeedWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FeedWhereUniqueInput],
  })
  disconnect?: Array<FeedWhereUniqueInput>;

  @Field(() => [FeedWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FeedWhereUniqueInput],
  })
  set?: Array<FeedWhereUniqueInput>;
}

export { FeedUpdateManyWithoutUsersInput as FeedUpdateManyWithoutUsersInput };
