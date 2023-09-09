import { getFirestore } from 'firebase/firestore'


const getDocumentById = async (collectionName, documentId) => {
  try {
    const db = getFirestore();
    const docRef = db.collection("items").doc(documentId);
    const docSnapshot = await docRef.get();

    if (docSnapshot.exists) {
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