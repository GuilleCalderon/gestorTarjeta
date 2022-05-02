import firebaseApp from "../utils/firebaseConfig";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
/* import { initialForm } from "../components/FormularioTarjeta"; */

const firestore = getFirestore(firebaseApp);

export const searchDocOrCreateDoc = async (idDocumento) => {
  //crear referencia al documento
  const docRef = firestore.collection("cards").doc(idDocumento);

  //buscar el documento

  const consulta = await getDoc(docRef);
  //si el documento no existe, crearlo
  if (!consulta) {
    const newDoc = await setDoc(docRef, {
      idDocumento,
      cardType: "credito",
      number: "",
      name: "",
      exp: "",
      segurity: "",
    });
    return newDoc;
  }
  return consulta;
};

//revisar si existe
/* if (consulta.exists()) {
    //si existe
    const data = consulta.data();
    return data.cards;
  } else {
    //si no existe
    setDoc(docRef, { cards: [...initialForm] });
    const consulta = await getDoc(docRef);
    const data = consulta.data();
    return data.cards;
  } */
