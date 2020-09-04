import * as admin from 'firebase-admin';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount = require('../credentials/serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export const firestore = admin.firestore();
