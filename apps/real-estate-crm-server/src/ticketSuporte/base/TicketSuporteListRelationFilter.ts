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
import { TicketSuporteWhereInput } from "./TicketSuporteWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TicketSuporteListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TicketSuporteWhereInput,
  })
  @ValidateNested()
  @Type(() => TicketSuporteWhereInput)
  @IsOptional()
  @Field(() => TicketSuporteWhereInput, {
    nullable: true,
  })
  every?: TicketSuporteWhereInput;

  @ApiProperty({
    required: false,
    type: () => TicketSuporteWhereInput,
  })
  @ValidateNested()
  @Type(() => TicketSuporteWhereInput)
  @IsOptional()
  @Field(() => TicketSuporteWhereInput, {
    nullable: true,
  })
  some?: TicketSuporteWhereInput;

  @ApiProperty({
    required: false,
    type: () => TicketSuporteWhereInput,
  })
  @ValidateNested()
  @Type(() => TicketSuporteWhereInput)
  @IsOptional()
  @Field(() => TicketSuporteWhereInput, {
    nullable: true,
  })
  none?: TicketSuporteWhereInput;
}
export { TicketSuporteListRelationFilter as TicketSuporteListRelationFilter };