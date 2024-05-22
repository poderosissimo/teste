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
import { ProjetoWhereUniqueInput } from "./ProjetoWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteProjetoArgs {
  @ApiProperty({
    required: true,
    type: () => ProjetoWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProjetoWhereUniqueInput)
  @Field(() => ProjetoWhereUniqueInput, { nullable: false })
  where!: ProjetoWhereUniqueInput;
}

export { DeleteProjetoArgs as DeleteProjetoArgs };
