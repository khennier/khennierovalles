import firebase from 'firebase/app'
import 'firebase/firestore'



const getDocumentById = async (collectionName, documentId) => {
  try {
    const db = firebase.firestore();
    const docRef = db.collection(collectionName).doc(documentId);
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