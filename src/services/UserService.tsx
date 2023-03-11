import { doc, getDoc, deleteDoc, setDoc } from "firebase/firestore";
import { database } from "./Firebase";

const setUserBio = async (uid: string, bioTxt: string | null) => {
  await setDoc(doc(database, "users", uid), {
    bio: bioTxt,
  })
    .then((r) => console.log(r))
    .catch((e) => console.log(e));
};

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

const deleteUserBio = async (uid: string) => {
  await deleteDoc(doc(database, "users", uid));
};

export { getUserBio, deleteUserBio, setUserBio };
