import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
@ObjectType("UpdateRideBookingInputObject")
class UpdateRideBookingInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    serviceType!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    status!: string;

    @Field(() => Date)
    @Type(() => Date)
    requestTime!: Date;

    @Field(() => Date)
    @Type(() => Date)
    startTime!: Date;

    @Field(() => Date)
    @Type(() => Date)
    endTime!: Date;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    userId!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    providerId!: string;
}

export { UpdateRideBookingInput as UpdateRideBookingInput };