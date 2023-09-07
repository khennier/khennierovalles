import { useEffect } from "react";

import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState } from "react";

function useGetDocumentById(items) {
    const [document, setDocument] = useState(null);

    // Devuelve un estudiante por id
    useEffect(() => {
      const db = getFirestore();
  
      const documentRef = doc(db, items, "7k2byJo5ox6rhnHXsoV8")
      // const studentRef = doc(db, "students", "ykIuZpMwNiziXZvgXgR4");
      getDoc(documentRef).then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          const documento = {
            id: snapshot.id,
            ...data,
          };
  
          setDocument(documento);
        }
      }).catch((err) => console.error(err));
  
    }, []);

    return { document };
}

export default useGetDocumentById;