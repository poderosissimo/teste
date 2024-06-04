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
import { AppointmentCreateNestedManyWithoutAgentsInput } from "./AppointmentCreateNestedManyWithoutAgentsInput";
import { ValidateNested, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumAgentSpecialization } from "./EnumAgentSpecialization";

@InputType()
class AgentCreateInput {
  @ApiProperty({
    required: false,
    type: () => AppointmentCreateNestedManyWithoutAgentsInput,
  })
  @ValidateNested()
  @Type(() => AppointmentCreateNestedManyWithoutAgentsInput)
  @IsOptional()
  @Field(() => AppointmentCreateNestedManyWithoutAgentsInput, {
    nullable: true,
  })
  appointments?: AppointmentCreateNestedManyWithoutAgentsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phoneNumber?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumAgentSpecialization,
  })
  @IsEnum(EnumAgentSpecialization)
  @IsOptional()
  @Field(() => EnumAgentSpecialization, {
    nullable: true,
  })
  specialization?: "Option1" | null;
}

export { AgentCreateInput as AgentCreateInput };
