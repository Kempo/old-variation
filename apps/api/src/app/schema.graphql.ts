import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Appointment {
    id: ID

    scheduledNotification: String

    appointmentDate: String

    "The length of the appointment, in minutes"
    timeLength: Int

    patient: Patient

    client: User

    reason: [String]

    serviceType: String

    location: String
  }

  type Patient {
    id: ID

    fullName: String

    email: String

    phoneNumber: String
  }

  type User {

    id: ID

    fullName: String

    appointments: [Appointment]

    availableLocations: [String]

    availableServices: [String]

    receivingPatients: Boolean
  }

  type Query {
    fetchAppointments(id: ID): [Appointment]
  }

  input CreateAppointmentInput {

    "The date of the appointment in ISO 8601"
    appointmentDate: String

    "The reason for the appointment"
    reason: [String]

    "The type of service"
    serviceType: String

    "The location of the appointment"
    location: String

    "The patient ID associated with this appointment"
    patient: ID

    "The client ID that will be providing the service"
    client: ID
  }

  type Mutation {
    createAppointment(input: CreateAppointmentInput): String
  }
`;

export default typeDefs;
