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
import { AprovacaoWhereInput } from "./AprovacaoWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class AprovacaoCountArgs {
  @ApiProperty({
    required: false,
    type: () => AprovacaoWhereInput,
  })
  @Field(() => AprovacaoWhereInput, { nullable: true })
  @Type(() => AprovacaoWhereInput)
  where?: AprovacaoWhereInput;
}

export { AprovacaoCountArgs as AprovacaoCountArgs };
