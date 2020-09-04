// import { Message } from '@variation-studio/api-interfaces';

import { ApolloError } from 'apollo-server-express';

const resolver = {
  Query: {
    fetchAppointments: async (parent, args, context, info) => {

      const db: FirebaseFirestore.Firestore = context.firestore;

      const snapshot = await db.collection('appointments').where('client', '==', args.id).get();

      if(snapshot.empty) {
        throw new ApolloError(`No appointments found for client ${args.id}`);
      }

      const appointments = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })

      return appointments;
    }
  },
  Appointment: {
    patient: async ({ patient }, _, context, __) => {

      const db: FirebaseFirestore.Firestore = context.firestore;

      const snapshot = await db.collection('patients').doc(patient).get().catch(error => {
        throw new ApolloError(error.message);
      })

      return snapshot.data();
    },
    client: async ({ client }, _, context, __) => {

      const db: FirebaseFirestore.Firestore = context.firestore;

      const snapshot = await db.collection('clients').doc(client).get().catch(error => {
        throw new ApolloError(error.message);
      })

      return snapshot.data();
    }
  },
  Mutation: {
    createAppointment: async (parent, { input }, context, info) => {

      const db: FirebaseFirestore.Firestore = context.firestore;

      if(input.appointmentDate.length === 0) {
        throw new ApolloError('Invalid date time specified.');
      }

      const appointment = await db.collection('appointments').add(input).catch(error => {
        throw new ApolloError(error.message);
      });

      return `Appointment created with id: ${appointment.id}`;
    }
  }
}

export default resolver;
