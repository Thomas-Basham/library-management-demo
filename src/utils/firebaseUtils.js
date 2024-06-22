import { collection, getDocs } from "firebase/firestore";

/**
 * Generic that gets all documents from a firestore database and returns an array of objects
 * @param {database} db
 * @param {string} collectionName
 * @returns {array}
 * @returns an array of objects
 */
async function getAllDocuments(db, collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const documents = [];

  querySnapshot.forEach((doc) => {
    documents.push({ id: doc.id, ...doc.data() });
  });

  console.log(documents);

  return documents;
}

export { getAllDocuments };
