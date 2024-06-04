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
import { ServiceBookingWhereUniqueInput } from "./ServiceBookingWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ServiceBookingUpdateInput } from "./ServiceBookingUpdateInput";

@ArgsType()
class UpdateServiceBookingArgs {
  @ApiProperty({
    required: true,
    type: () => ServiceBookingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ServiceBookingWhereUniqueInput)
  @Field(() => ServiceBookingWhereUniqueInput, { nullable: false })
  where!: ServiceBookingWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ServiceBookingUpdateInput,
  })
  @ValidateNested()
  @Type(() => ServiceBookingUpdateInput)
  @Field(() => ServiceBookingUpdateInput, { nullable: false })
  data!: ServiceBookingUpdateInput;
}

export { UpdateServiceBookingArgs as UpdateServiceBookingArgs };
