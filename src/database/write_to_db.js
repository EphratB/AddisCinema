import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "./config";

export async function save(data) {
  console.log("Data to be saved:", data);
  try {
    const docRef = await addDoc(collection(db, "movies"), data);
    console.log("Document written with ID: ", docRef.id);
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
    return null;
  }
}

export async function get(id) {
  const querySnapshot = await getDocs(
    query(collection(db, "movies"), where("id", "==", id))
  );
  const movies = querySnapshot.docs.map((doc) => doc.data());
  return movies.length > 0 ? movies[0] : null;
}
