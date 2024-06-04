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
import { ManutencaoWhereUniqueInput } from "./ManutencaoWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class ManutencaoFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => ManutencaoWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ManutencaoWhereUniqueInput)
  @Field(() => ManutencaoWhereUniqueInput, { nullable: false })
  where!: ManutencaoWhereUniqueInput;
}

export { ManutencaoFindUniqueArgs as ManutencaoFindUniqueArgs };
