import { Arg, FieldResolver, Mutation, Query, Resolver } from "type-graphql";
import { CreateAppointmentInput } from '../dtos/inputs/create-appointment-input';
import { Appointment } from '../dtos/models/appointment-models';
import { Customer } from "../dtos/models/custommer-model";

@Resolver(() => Appointment)
export class AppointmentsResolver {
    @Query(() => [Appointment])
    async Appointments() {
        return []
    }

    @Mutation(() => Appointment)
    async createAppointment(@Arg('data') data:CreateAppointmentInput){

        const appointment = {
            startsAt:data.startsAt,
            endsAt:data.endsAt
        }

        return appointment
    }
    @FieldResolver(() => Customer)
    async customer(){

    }
}