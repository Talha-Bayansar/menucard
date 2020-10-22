import * as firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};
firebase.initializeApp(firebaseConfig);
const db = firebaseConfig.projectId ? firebase.firestore() : null;
if (db) console.log(`connection to database is ok`);
else console.log(`ERROR: no connection to database`);

export const STATUS_NEW = "new";
