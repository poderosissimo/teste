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
import { RideWhereInput } from "./RideWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class RideCountArgs {
  @ApiProperty({
    required: false,
    type: () => RideWhereInput,
  })
  @Field(() => RideWhereInput, { nullable: true })
  @Type(() => RideWhereInput)
  where?: RideWhereInput;
}

export { RideCountArgs as RideCountArgs };