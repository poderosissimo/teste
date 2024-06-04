import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ArgsType()
@ObjectType("RateRideInputObject")
class RateRideInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    rating!: string;

    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    comment?: string;

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

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    serviceBookingId!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    rideId!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    rideStatus!: string;

    @Field(() => Date)
    @Type(() => Date)
    timeTaken!: Date;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    rideType!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    fare!: string;

    @Field(() => [GraphQLJSON])
    pickUpLocation!: InputJsonValue;

    @Field(() => GraphQLJSON)
    dropOffLocation!: InputJsonValue;

    @Field(() => Date)
    @Type(() => Date)
    completedTime!: Date;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    gpsNavigationId!: string;

    @Field(() => GraphQLJSON)
    route!: InputJsonValue;

    @Field(() => GraphQLJSON)
    previousRoute!: InputJsonValue;

    @Field(() => GraphQLJSON)
    destination!: InputJsonValue;
}

export { RateRideInput as RateRideInput };