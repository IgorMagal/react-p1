import { useEffect, useState } from "react";
import { UserAuth } from "../services/AuthCtxProvider";
import { getUserBio } from "../services/UserService";
import BioForm from "../components/BioForm";
const ProfilePage = () => {
  const { user } = UserAuth();
  const [bio, setBio] = useState<string | null>(null);

  useEffect(() => {
    if (user?.uid !== null) {
      getUserBio(user!.uid).then((bio) => setBio(bio));
    }
  }, [user]);

  return (
    //m-2 p-1 mx-5 border-2 rounded-lg border-neutral-900 bg-neutral-100 shadow-xl hover:scale-105 shadow-neutral-900 hover:border-white text-neutral-800

    <div className="flex flex-col gap-4 text-neutral-800 py-20 text-center items-center w-full p-4 bg-neutral-100">
      <p className="text-2xl">{`ProfilePage for ${user?.displayName}`}</p>
      <p className="text-md">{user?.email}</p>
      <img
        className="w-40 h-40 rounded-full border-2 border-neutral-50 shadow-lg shadow-neutral-500"
        src={user?.photoURL ? user.photoURL : undefined}
        alt={user?.displayName!}
      />
      {bio === null ? (
        <BioForm />
      ) : (
        <div className="m-2 p-1 mx-5 border-2 rounded-lg border-neutral-300 bg-neutral-200  text-neutral-800">
          <h2 className="text-2xl text-left px-4 py-1">Bio:</h2>
          <p className="text-justify p-4">{bio}</p>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
