import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
};

firebase.initializeApp(firebaseConfig);
const db = (firebaseConfig.projectId ? firebase.firestore() : null);

if (db)
    console.log(`connection to database is ok`);
else
    console.log(`ERROR: no connection to database`);

export const STATUS_NEW = "new";


//returns a promise
//when resolved, return value is a collection of orders
function getOrderListForTable(tableNumber, statuses) {
    if (!db) return new Promise((resolve, reject) => reject("no database"));
    return db.collection('orders')
        .where("tableNumber", "==", tableNumber)
        .where("status", "in", statuses)
        .get();
}

/**
 * @param tableNumber
 * @returns ID of order for this table
 * Finds orderlist with status NEW for this table.
 * If not found, it returns null.
 */
export async function getOrderListIdForTable(tableNumber) {
    if (!db) return null;
    if (!tableNumber) return null;

    const orderListFromDb = await getOrderListForTable(tableNumber, [STATUS_NEW]);
    if (orderListFromDb.empty) return null;

    return orderListFromDb.docs[0].id;
}

/**
 * @param orderListId
 * @param observer: object with 2 functions:
 *    next:  will be called when the data in the database changes
 *    error: will be called when a problem occurs
 * see Observer Pattern
 */
export function streamOrder(orderListId, observer) {
    if (!db) return;

    db.collection('orders')
        .doc(orderListId)
        .onSnapshot(observer);
}
