import { doc, getDoc } from "firebase/firestore";
import { database } from "./Firebase";

const getUserBio = async (uid: string) => {
  const docRef = doc(database, "users", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().bio;
  } else {
    console.log("No such document!");
    return null;
  }
};

const addUserBio = async (uid: string, bio: string) => {
  return "bye";
};

export { getUserBio, addUserBio };
