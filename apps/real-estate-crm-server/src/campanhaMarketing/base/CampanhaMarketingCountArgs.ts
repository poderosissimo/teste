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
import { CampanhaMarketingWhereInput } from "./CampanhaMarketingWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class CampanhaMarketingCountArgs {
  @ApiProperty({
    required: false,
    type: () => CampanhaMarketingWhereInput,
  })
  @Field(() => CampanhaMarketingWhereInput, { nullable: true })
  @Type(() => CampanhaMarketingWhereInput)
  where?: CampanhaMarketingWhereInput;
}

export { CampanhaMarketingCountArgs as CampanhaMarketingCountArgs };
