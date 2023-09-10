import { getFirestore,  getDoc, doc } from 'firebase/firestore';


const getDocumentById = async (collectionName, documentId) => {
  try {
    const db = getFirestore();

    const queryDoc= doc(db, "items", documentId);
    const docSnapshot = await getDoc(queryDoc);

    if (docSnapshot.exists()) {
      return { id: docSnapshot.id, ...docSnapshot.data() };
    } else {
      throw new Error(`El documento con ID ${documentId} no existe en la colección ${collectionName}.`);
    }
  } catch (error) {
    console.error('Error al obtener el documento:', error);
    throw error;
  }
}
console.log(getDocumentById)

export default getDocumentById;