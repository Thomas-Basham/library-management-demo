import { collection, getDocs } from "firebase/firestore";

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
